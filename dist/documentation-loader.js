'use strict';

var _child_process = require('child_process');

module.exports = function scsslintLoader(source, map) {
    var args = [];
    var documentationConfig = [];
    var _cwd = process.cwd();

    function configCWD() {
        args.push('./node_modules/.bin/documentation build');
        args.push(documentationConfig.entry);
        args.push('--output=' + documentationConfig.output);
        args.push('--format=' + documentationConfig.format);

        if (documentationConfig.theme) {
            args.push('--theme=' + documentationConfig.theme);
        }

        if (documentationConfig.shallow) {
            args.push('--shallow');
        }

        if (documentationConfig.github) {
            args.push('--github');
        }
        args.push(';');
        (0, _child_process.exec)(args.join(' '), {
            cwd: _cwd
        }, function (error) {
            if (error) {
                // console.log('documentation-loader error: ', error);
            }
        });
    }

    var documentationDefaults = {
        output: './documentation',
        github: false,
        format: 'json',
        config: '',
        theme: false,
        shallow: false,
        entry: this.resourcePath
    };
    var globalSettings = this.options.documentation || {};
    // const loader_settings = loaderUtils.parseQuery(this.query) || {};
    documentationConfig = Object.assign(documentationDefaults, globalSettings);
    this.cacheable();
    if (documentationConfig.entry.indexOf(_cwd) === 0) {
        documentationConfig.entry = documentationConfig.entry.substr(_cwd.length + 1);
    }
    configCWD();
    this.callback(null, source, map);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9kb2N1bWVudGF0aW9uLWxvYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLE9BQU8sT0FBUCxHQUFpQixTQUFTLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0MsR0FBaEMsRUFBcUM7QUFDbEQsUUFBTSxPQUFPLEVBQWI7QUFDQSxRQUFJLHNCQUFzQixFQUExQjtBQUNBLFFBQU0sT0FBTyxRQUFRLEdBQVIsRUFBYjs7QUFFQSxhQUFTLFNBQVQsR0FBcUI7QUFDakIsYUFBSyxJQUFMLENBQVUseUNBQVY7QUFDQSxhQUFLLElBQUwsQ0FBVSxvQkFBb0IsS0FBOUI7QUFDQSxhQUFLLElBQUwsZUFBc0Isb0JBQW9CLE1BQTFDO0FBQ0EsYUFBSyxJQUFMLGVBQXNCLG9CQUFvQixNQUExQzs7QUFFQSxZQUFJLG9CQUFvQixLQUF4QixFQUErQjtBQUMzQixpQkFBSyxJQUFMLGNBQXFCLG9CQUFvQixLQUF6QztBQUNIOztBQUVELFlBQUksb0JBQW9CLE9BQXhCLEVBQWlDO0FBQzdCLGlCQUFLLElBQUwsQ0FBVSxXQUFWO0FBQ0g7O0FBRUQsWUFBSSxvQkFBb0IsTUFBeEIsRUFBZ0M7QUFDNUIsaUJBQUssSUFBTCxDQUFVLFVBQVY7QUFDSDtBQUNELGFBQUssSUFBTCxDQUFVLEdBQVY7QUFDQSxpQ0FBSyxLQUFLLElBQUwsQ0FBVSxHQUFWLENBQUwsRUFBcUI7QUFDakIsaUJBQUs7QUFEWSxTQUFyQixFQUVHLFVBQUMsS0FBRCxFQUFXO0FBQ1YsZ0JBQUksS0FBSixFQUFXOztBQUVWO0FBQ0osU0FORDtBQU9IOztBQUVELFFBQU0sd0JBQXdCO0FBQzFCLGdCQUFRLGlCQURrQjtBQUUxQixnQkFBUSxLQUZrQjtBQUcxQixnQkFBUSxNQUhrQjtBQUkxQixnQkFBUSxFQUprQjtBQUsxQixlQUFPLEtBTG1CO0FBTTFCLGlCQUFTLEtBTmlCO0FBTzFCLGVBQU8sS0FBSztBQVBjLEtBQTlCO0FBU0EsUUFBTSxpQkFBaUIsS0FBSyxPQUFMLENBQWEsYUFBYixJQUE4QixFQUFyRDs7QUFFQSwwQkFBc0IsT0FBTyxNQUFQLENBQWMscUJBQWQsRUFBcUMsY0FBckMsQ0FBdEI7QUFDQSxTQUFLLFNBQUw7QUFDQSxRQUFJLG9CQUFvQixLQUFwQixDQUEwQixPQUExQixDQUFrQyxJQUFsQyxNQUE0QyxDQUFoRCxFQUFtRDtBQUMvQyw0QkFBb0IsS0FBcEIsR0FBNEIsb0JBQW9CLEtBQXBCLENBQTBCLE1BQTFCLENBQWlDLEtBQUssTUFBTCxHQUFjLENBQS9DLENBQTVCO0FBQ0g7QUFDRDtBQUNBLFNBQUssUUFBTCxDQUFjLElBQWQsRUFBb0IsTUFBcEIsRUFBNEIsR0FBNUI7QUFDSCxDQWxERCIsImZpbGUiOiJkb2N1bWVudGF0aW9uLWxvYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4ZWMgfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzY3NzbGludExvYWRlcihzb3VyY2UsIG1hcCkge1xuICAgIGNvbnN0IGFyZ3MgPSBbXTtcbiAgICBsZXQgZG9jdW1lbnRhdGlvbkNvbmZpZyA9IFtdO1xuICAgIGNvbnN0IF9jd2QgPSBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgZnVuY3Rpb24gY29uZmlnQ1dEKCkge1xuICAgICAgICBhcmdzLnB1c2goJy4vbm9kZV9tb2R1bGVzLy5iaW4vZG9jdW1lbnRhdGlvbiBidWlsZCcpO1xuICAgICAgICBhcmdzLnB1c2goZG9jdW1lbnRhdGlvbkNvbmZpZy5lbnRyeSk7XG4gICAgICAgIGFyZ3MucHVzaChgLS1vdXRwdXQ9JHtkb2N1bWVudGF0aW9uQ29uZmlnLm91dHB1dH1gKTtcbiAgICAgICAgYXJncy5wdXNoKGAtLWZvcm1hdD0ke2RvY3VtZW50YXRpb25Db25maWcuZm9ybWF0fWApO1xuXG4gICAgICAgIGlmIChkb2N1bWVudGF0aW9uQ29uZmlnLnRoZW1lKSB7XG4gICAgICAgICAgICBhcmdzLnB1c2goYC0tdGhlbWU9JHtkb2N1bWVudGF0aW9uQ29uZmlnLnRoZW1lfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvY3VtZW50YXRpb25Db25maWcuc2hhbGxvdykge1xuICAgICAgICAgICAgYXJncy5wdXNoKCctLXNoYWxsb3cnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb2N1bWVudGF0aW9uQ29uZmlnLmdpdGh1Yikge1xuICAgICAgICAgICAgYXJncy5wdXNoKCctLWdpdGh1YicpO1xuICAgICAgICB9XG4gICAgICAgIGFyZ3MucHVzaCgnOycpO1xuICAgICAgICBleGVjKGFyZ3Muam9pbignICcpLCB7XG4gICAgICAgICAgICBjd2Q6IF9jd2QsXG4gICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2RvY3VtZW50YXRpb24tbG9hZGVyIGVycm9yOiAnLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGRvY3VtZW50YXRpb25EZWZhdWx0cyA9IHtcbiAgICAgICAgb3V0cHV0OiAnLi9kb2N1bWVudGF0aW9uJyxcbiAgICAgICAgZ2l0aHViOiBmYWxzZSxcbiAgICAgICAgZm9ybWF0OiAnanNvbicsXG4gICAgICAgIGNvbmZpZzogJycsXG4gICAgICAgIHRoZW1lOiBmYWxzZSxcbiAgICAgICAgc2hhbGxvdzogZmFsc2UsXG4gICAgICAgIGVudHJ5OiB0aGlzLnJlc291cmNlUGF0aCxcbiAgICB9O1xuICAgIGNvbnN0IGdsb2JhbFNldHRpbmdzID0gdGhpcy5vcHRpb25zLmRvY3VtZW50YXRpb24gfHwge307XG4gICAgLy8gY29uc3QgbG9hZGVyX3NldHRpbmdzID0gbG9hZGVyVXRpbHMucGFyc2VRdWVyeSh0aGlzLnF1ZXJ5KSB8fCB7fTtcbiAgICBkb2N1bWVudGF0aW9uQ29uZmlnID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudGF0aW9uRGVmYXVsdHMsIGdsb2JhbFNldHRpbmdzKTtcbiAgICB0aGlzLmNhY2hlYWJsZSgpO1xuICAgIGlmIChkb2N1bWVudGF0aW9uQ29uZmlnLmVudHJ5LmluZGV4T2YoX2N3ZCkgPT09IDApIHtcbiAgICAgICAgZG9jdW1lbnRhdGlvbkNvbmZpZy5lbnRyeSA9IGRvY3VtZW50YXRpb25Db25maWcuZW50cnkuc3Vic3RyKF9jd2QubGVuZ3RoICsgMSk7XG4gICAgfVxuICAgIGNvbmZpZ0NXRCgpO1xuICAgIHRoaXMuY2FsbGJhY2sobnVsbCwgc291cmNlLCBtYXApO1xufTtcbiJdfQ==