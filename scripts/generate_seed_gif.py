from __future__ import annotations

from math import atan2, cos, hypot, pi, sin, sqrt
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "images" / "brand" / "seed-sprout-draw.gif"
LOGO_OUTPUT = ROOT / "public" / "images" / "brand" / "seed-civic-partners-logo-animated.gif"
SCALE = 4
SIZE = 180
BACKGROUND = "#FAF7EF"
STROKE = "#2F6B55"
LOGO_SCALE = 7
LOGO_OFFSET = (10, 15)
STROKE_WIDTH = round(1.5 * LOGO_SCALE * SCALE)


def cubic(p0, p1, p2, p3, steps=32):
    points = []
    for index in range(steps + 1):
        t = index / steps
        mt = 1 - t
        points.append(
            (
                mt**3 * p0[0] + 3 * mt**2 * t * p1[0] + 3 * mt * t**2 * p2[0] + t**3 * p3[0],
                mt**3 * p0[1] + 3 * mt**2 * t * p1[1] + 3 * mt * t**2 * p2[1] + t**3 * p3[1],
            )
        )
    return points


def arc(p0, p1, rx, ry, large_arc=False, sweep=False, steps=24):
    x1, y1 = p0
    x2, y2 = p1
    dx = (x1 - x2) / 2
    dy = (y1 - y2) / 2
    scale = max(1, sqrt((dx * dx) / (rx * rx) + (dy * dy) / (ry * ry)))
    rx *= scale
    ry *= scale
    sign = -1 if large_arc == sweep else 1
    factor = sign * sqrt(max(0, ((rx * ry) ** 2 - (rx * dy) ** 2 - (ry * dx) ** 2) / ((rx * dy) ** 2 + (ry * dx) ** 2)))
    cxp = factor * (rx * dy / ry)
    cyp = factor * (-ry * dx / rx)
    cx = cxp + (x1 + x2) / 2
    cy = cyp + (y1 + y2) / 2

    start = atan2((y1 - cy) / ry, (x1 - cx) / rx)
    end = atan2((y2 - cy) / ry, (x2 - cx) / rx)
    delta = end - start
    if not sweep and delta > 0:
        delta -= 2 * pi
    elif sweep and delta < 0:
        delta += 2 * pi
    return [(cx + rx * cos(start + delta * index / steps), cy + ry * sin(start + delta * index / steps)) for index in range(steps + 1)]


def join(*parts):
    result = []
    for part in parts:
        result.extend(part if not result else part[1:])
    return result


def logo_path(path):
    return [(x * LOGO_SCALE + LOGO_OFFSET[0], y * LOGO_SCALE + LOGO_OFFSET[1]) for x, y in path]


right_leaf = join(
    cubic((13, 10), (14.9, 9.9), (16.3, 9.4), (17.3, 8.6)),
    cubic((17.3, 8.6), (18.3, 7.6), (18.9, 6.3), (19, 4)),
    cubic((19, 4), (16.3, 4.1), (15, 5), (14.1, 6)),
    arc((14.1, 6), (13, 10), 7, 7, large_arc=False, sweep=False),
)
connector = cubic((13, 10), (12.6, 11.1), (12.2, 12.2), (11.8, 13.1), steps=12)
left_leaf = join(
    cubic((11.8, 13.1), (9.8, 13.5), (8.3, 13.5), (7, 12.8)),
    cubic((7, 12.8), (5.8, 12.2), (4.7, 10.9), (4, 8.6)),
    cubic((4, 8.6), (6.8, 8.1), (8.4, 8.6), (9.5, 9.4)),
    cubic((9.5, 9.4), (10.6, 10.2), (11.3, 11.6), (11.8, 13.1)),
)
stem = cubic((13, 10), (10.8, 13.6), (15.5, 17.5), (10, 20), steps=40)
ground = [(10, 20), (7, 20), (17, 20)]

continuous_path = join(right_leaf, connector, left_leaf, list(reversed(connector)), stem, ground)
paths = [logo_path(continuous_path)]


def scaled(point):
    return (round(point[0] * SCALE), round(point[1] * SCALE))


def path_length(path):
    return sum(hypot(b[0] - a[0], b[1] - a[1]) for a, b in zip(path, path[1:]))


lengths = [path_length(path) for path in paths]
total_length = sum(lengths)


def partial_path(path, target_length):
    if target_length <= 0:
        return []
    points = [path[0]]
    remaining = target_length
    for start, end in zip(path, path[1:]):
        segment = hypot(end[0] - start[0], end[1] - start[1])
        if remaining >= segment:
            points.append(end)
            remaining -= segment
            continue
        ratio = remaining / segment if segment else 0
        points.append((start[0] + (end[0] - start[0]) * ratio, start[1] + (end[1] - start[1]) * ratio))
        break
    return points


def render(progress):
    image = Image.new("RGB", (SIZE * SCALE, SIZE * SCALE), BACKGROUND)
    draw = ImageDraw.Draw(image)
    remaining = total_length * progress
    for path, length in zip(paths, lengths):
        visible = partial_path(path, min(remaining, length))
        if len(visible) > 1:
            draw.line([scaled(point) for point in visible], fill=STROKE, width=STROKE_WIDTH, joint="curve")
            radius = STROKE_WIDTH // 2
            for point in (visible[0], visible[-1]):
                x, y = scaled(point)
                draw.ellipse((x - radius, y - radius, x + radius, y + radius), fill=STROKE)
        remaining -= length
        if remaining <= 0:
            break
    return image.resize((SIZE, SIZE), Image.Resampling.LANCZOS)


draw_frames = 42
frames = [render(index / (draw_frames - 1)) for index in range(draw_frames)]
frames.extend([frames[-1].copy() for _ in range(16)])
frames.extend([render(0) for _ in range(2)])

OUTPUT.parent.mkdir(parents=True, exist_ok=True)
frames[0].save(
    OUTPUT,
    save_all=True,
    append_images=frames[1:],
    duration=40,
    loop=0,
    optimize=True,
    disposal=2,
)
print(OUTPUT)


LOGO_SIZE = (220, 56)
LOGO_OUTPUT_SCALE = 2
LOGO_AA = 2
LOGO_FACTOR = LOGO_OUTPUT_SCALE * LOGO_AA
LOGO_STROKE_WIDTH = round(3 * LOGO_FACTOR)
logo_length = path_length(continuous_path)
font_path = Path(r"C:\Windows\Fonts\NotoSansKR-VF.ttf")
wordmark_font = ImageFont.truetype(str(font_path), 22 * LOGO_FACTOR)
english_font = ImageFont.truetype(str(font_path), round(8.5 * LOGO_FACTOR))
wordmark_font.set_variation_by_name("Bold")
english_font.set_variation_by_name("Bold")


def logo_point(point):
    x, y = point
    return (round((4 + x * 2) * LOGO_FACTOR), round((4 + y * 2) * LOGO_FACTOR))


def draw_tracking(draw, position, text, font, fill, spacing):
    x, y = position
    for character in text:
        draw.text((x, y), character, font=font, fill=fill, anchor="ls")
        x += font.getlength(character) + spacing


def render_logo(progress):
    work_size = (LOGO_SIZE[0] * LOGO_FACTOR, LOGO_SIZE[1] * LOGO_FACTOR)
    image = Image.new("RGB", work_size, BACKGROUND)
    draw = ImageDraw.Draw(image)
    factor = LOGO_FACTOR
    draw.ellipse((2 * factor, 2 * factor, 54 * factor, 54 * factor), fill=STROKE)
    draw.text((66 * factor, 27 * factor), "씨앗연대", font=wordmark_font, fill="#174C3A", anchor="ls")
    draw_tracking(
        draw,
        (67 * factor, 43 * factor),
        "SEED CIVIC PARTNERS",
        english_font,
        "#656B68",
        1.45 * factor,
    )

    visible = partial_path(continuous_path, logo_length * progress)
    if len(visible) > 1:
        points = [logo_point(point) for point in visible]
        draw.line(points, fill=BACKGROUND, width=LOGO_STROKE_WIDTH, joint="curve")
        radius = LOGO_STROKE_WIDTH // 2
        for x, y in (points[0], points[-1]):
            draw.ellipse((x - radius, y - radius, x + radius, y + radius), fill=BACKGROUND)

    return image.resize(
        (LOGO_SIZE[0] * LOGO_OUTPUT_SCALE, LOGO_SIZE[1] * LOGO_OUTPUT_SCALE),
        Image.Resampling.LANCZOS,
    )


logo_frames = [render_logo(index / (draw_frames - 1)) for index in range(draw_frames)]
logo_frames.extend([logo_frames[-1].copy() for _ in range(16)])
logo_frames.extend([render_logo(0) for _ in range(2)])
logo_frames[0].save(
    LOGO_OUTPUT,
    save_all=True,
    append_images=logo_frames[1:],
    duration=40,
    loop=0,
    optimize=True,
    disposal=2,
)
print(LOGO_OUTPUT)
