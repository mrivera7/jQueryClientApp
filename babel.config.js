module.exports = api => {
    api.cache(true);
    const presets = [
        [
            '@babel/preset-env',
            {
                modules: false,
            },
        ],
    ];
    const plugins = [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-syntac-dynamic-import',
    ];
    return { presets, plugins };
};