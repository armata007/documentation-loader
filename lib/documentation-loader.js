import { exec } from 'child_process';

module.exports = function scsslintLoader(source, map) {
    const args = [];
    let documentationConfig = [];
    const _cwd = process.cwd();

    function configCWD() {
        args.push('./node_modules/.bin/documentation build');
        args.push(documentationConfig.entry);
        args.push(`--output=${documentationConfig.output}`);
        args.push(`--format=${documentationConfig.format}`);

        if (documentationConfig.theme) {
            args.push(`--theme=${documentationConfig.theme}`);
        }

        if (documentationConfig.shallow) {
            args.push('--shallow');
        }

        if (documentationConfig.github) {
            args.push('--github');
        }
        exec(args.join(' '), {
            cwd: _cwd,
        }, (error) => {
            if (error) {
                // console.log('documentation-loader error: ', error);
            }
        });
    }

    const documentationDefaults = {
        output: './documentation',
        github: false,
        format: 'json',
        config: '',
        theme: false,
        shallow: false,
        entry: this.resourcePath,
    };
    const globalSettings = this.options.documentation || {};
    // const loader_settings = loaderUtils.parseQuery(this.query) || {};
    documentationConfig = Object.assign(documentationDefaults, globalSettings);
    this.cacheable();
    if (documentationConfig.entry.indexOf(_cwd) === 0) {
        documentationConfig.entry = documentationConfig.entry.substr(_cwd.length + 1);
    }
    configCWD();
    this.callback(null, source, map);
};
