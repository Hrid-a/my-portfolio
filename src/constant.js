export const LIGHT_COLORS = {
    '--color-text': 'hsl(216, 4%, 25%)',
    '--color-primary': 'hsl(45, 86%, 62%)',
    '--color-primary-100': 'hsl(45deg 94% 52%)',
    '--color-decorative-300': 'hsl(50deg 100% 85%)',
    '--color-decorative-500': 'hsl(50deg 100% 70%)',
    '--color-gray-0': 'white',
    '--color-gray-100': 'hsl(0deg 0% 100% / 56%)',
    '--color-gray-200': 'hsl(204deg 20.83% 90.59%)',
    '--color-gray-300': 'hsl(206, 23%, 94%)',
    '--color-gray-400': 'hsl(217deg 8% 56%)',
    '--color-gray-500': 'hsl(210deg 19%, 6%)',
    '--color-gray-700': 'hsl(214deg 10% 13%)',
    '--color-gray-900': 'hsl(216deg 4% 25%)',
    '--color-gray-1000': 'black',
}
export const DARK_COLORS = {
    '--color-text': 'hsl(215, 28%, 82%)',
    '--color-primary': 'hsl(45, 86%, 62%)',
    '--color-primary-100': 'hsl(45deg 94% 52%)',
    '--color-decorative-100': 'hsl(256deg 20% 4%)',
    '--color-decorative-500': 'hsl(256deg 40% 30%)',
    '--color-gray-0': 'black',
    '--color-gray-100': 'hsl(214deg 10% 13% / 66%)',
    '--color-gray-200': 'hsl(220deg 10% 13%)',
    '--color-gray-300': 'hsl(214, 10%, 14%)',
    // '--color-gray-400': 'hsl(217deg 8% 56%)', //does not exist
    '--color-gray-400': 'hsl(210deg 10% 16%)',
    '--color-gray-500': 'hsl(0, 0%, 100%)',
    '--color-gray-700': 'hsl(0, 0%, 100%)',
    '--color-gray-900': 'hsl(215, 28%, 82%)',
    '--color-gray-1000': 'white',
};

LIGHT_COLORS['--color-page-background'] = LIGHT_COLORS['--color-gray-300'];
LIGHT_COLORS['--color-backdrop'] = LIGHT_COLORS['--color-decorative-500'];
LIGHT_COLORS['--color-backdrop-highlight'] = LIGHT_COLORS['--color-decorative-300'];
LIGHT_COLORS['--color-gradient-background'] = `linear-gradient(145deg, ${LIGHT_COLORS['--color-gray-200']}, ${LIGHT_COLORS['--color-gray-0']})`;
LIGHT_COLORS['--hover-gradient-background'] = `linear-gradient(145deg, ${LIGHT_COLORS['--color-primary']}, ${LIGHT_COLORS['--color-primary-100']})`;

DARK_COLORS['--color-backdrop'] = DARK_COLORS['--color-decorative-100'];
DARK_COLORS['--color-backdrop-highlight'] = DARK_COLORS['--color-decorative-500'];
DARK_COLORS['--color-page-background'] = DARK_COLORS['--color-gray-300'];
DARK_COLORS['--color-gradient-background'] = `linear-gradient(145deg, ${DARK_COLORS['--color-gray-200']}, ${DARK_COLORS['--color-gray-400']})`;
DARK_COLORS['--hover-gradient-background'] = `linear-gradient(145deg, ${DARK_COLORS['--color-primary']}, ${DARK_COLORS['--color-primary-100']})`;

export const LIGHT_SHADOWS =
{
    '--shadow-card': '5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff'
}
export const DARK_SHADOWS =
{
    '--shadow-card': '10px 10px 19px #1c1e22,- 10px - 10px 19px #262a2e'
}
export const BREAK_POINTS = {
    tabletMin: 550,
    laptopMin: 1100,
    desktopMin: 1500,
}

export const QUERIES = {
    '--tabletAndUp': `min-width: ${BREAK_POINTS.tabletMin / 16}rem`,
    '--laptopAndUp': `min-width: ${BREAK_POINTS.laptopMin / 16}rem`,
    '--desktopAndUp': `min-width:${BREAK_POINTS.desktopMin}rem`,
}

export const LIGHT_TOKENS = {
    ...LIGHT_COLORS,
    ...LIGHT_SHADOWS,
};
export const DARK_TOKENS = {
    ...DARK_COLORS,
    ...DARK_SHADOWS,
};















