'use strict';

var _child_process = require('child_process');

module.exports = function scsslintLoader(source, map) {
    var args = [];
    var documentationConfig = [];
    var _cwd = process.cwd();

    function configCWD() {
        args.push('node ./node_modules/documentation/bin/documentation.js build');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9kb2N1bWVudGF0aW9uLWxvYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLE9BQU8sT0FBUCxHQUFpQixTQUFTLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0MsR0FBaEMsRUFBcUM7QUFDbEQsUUFBTSxPQUFPLEVBQWI7QUFDQSxRQUFJLHNCQUFzQixFQUExQjtBQUNBLFFBQU0sT0FBTyxRQUFRLEdBQVIsRUFBYjs7QUFFQSxhQUFTLFNBQVQsR0FBcUI7QUFDakIsYUFBSyxJQUFMLENBQVUsOERBQVY7QUFDQSxhQUFLLElBQUwsQ0FBVSxvQkFBb0IsS0FBOUI7QUFDQSxhQUFLLElBQUwsZUFBc0Isb0JBQW9CLE1BQTFDO0FBQ0EsYUFBSyxJQUFMLGVBQXNCLG9CQUFvQixNQUExQzs7QUFFQSxZQUFJLG9CQUFvQixLQUF4QixFQUErQjtBQUMzQixpQkFBSyxJQUFMLGNBQXFCLG9CQUFvQixLQUF6QztBQUNIOztBQUVELFlBQUksb0JBQW9CLE9BQXhCLEVBQWlDO0FBQzdCLGlCQUFLLElBQUwsQ0FBVSxXQUFWO0FBQ0g7O0FBRUQsWUFBSSxvQkFBb0IsTUFBeEIsRUFBZ0M7QUFDNUIsaUJBQUssSUFBTCxDQUFVLFVBQVY7QUFDSDtBQUNELGlDQUFLLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBTCxFQUFxQjtBQUNqQixpQkFBSztBQURZLFNBQXJCLEVBRUcsVUFBQyxLQUFELEVBQVc7QUFDVixnQkFBSSxLQUFKLEVBQVc7O0FBRVY7QUFDSixTQU5EO0FBT0g7O0FBRUQsUUFBTSx3QkFBd0I7QUFDMUIsZ0JBQVEsaUJBRGtCO0FBRTFCLGdCQUFRLEtBRmtCO0FBRzFCLGdCQUFRLE1BSGtCO0FBSTFCLGdCQUFRLEVBSmtCO0FBSzFCLGVBQU8sS0FMbUI7QUFNMUIsaUJBQVMsS0FOaUI7QUFPMUIsZUFBTyxLQUFLO0FBUGMsS0FBOUI7QUFTQSxRQUFNLGlCQUFpQixLQUFLLE9BQUwsQ0FBYSxhQUFiLElBQThCLEVBQXJEOztBQUVBLDBCQUFzQixPQUFPLE1BQVAsQ0FBYyxxQkFBZCxFQUFxQyxjQUFyQyxDQUF0QjtBQUNBLFNBQUssU0FBTDtBQUNBLFFBQUksb0JBQW9CLEtBQXBCLENBQTBCLE9BQTFCLENBQWtDLElBQWxDLE1BQTRDLENBQWhELEVBQW1EO0FBQy9DLDRCQUFvQixLQUFwQixHQUE0QixvQkFBb0IsS0FBcEIsQ0FBMEIsTUFBMUIsQ0FBaUMsS0FBSyxNQUFMLEdBQWMsQ0FBL0MsQ0FBNUI7QUFDSDtBQUNEO0FBQ0EsU0FBSyxRQUFMLENBQWMsSUFBZCxFQUFvQixNQUFwQixFQUE0QixHQUE1QjtBQUNILENBakREIiwiZmlsZSI6ImRvY3VtZW50YXRpb24tbG9hZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXhlYyB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzY3NzbGludExvYWRlcihzb3VyY2UsIG1hcCkge1xyXG4gICAgY29uc3QgYXJncyA9IFtdO1xyXG4gICAgbGV0IGRvY3VtZW50YXRpb25Db25maWcgPSBbXTtcclxuICAgIGNvbnN0IF9jd2QgPSBwcm9jZXNzLmN3ZCgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNvbmZpZ0NXRCgpIHtcclxuICAgICAgICBhcmdzLnB1c2goJ25vZGUgLi9ub2RlX21vZHVsZXMvZG9jdW1lbnRhdGlvbi9iaW4vZG9jdW1lbnRhdGlvbi5qcyBidWlsZCcpO1xyXG4gICAgICAgIGFyZ3MucHVzaChkb2N1bWVudGF0aW9uQ29uZmlnLmVudHJ5KTtcclxuICAgICAgICBhcmdzLnB1c2goYC0tb3V0cHV0PSR7ZG9jdW1lbnRhdGlvbkNvbmZpZy5vdXRwdXR9YCk7XHJcbiAgICAgICAgYXJncy5wdXNoKGAtLWZvcm1hdD0ke2RvY3VtZW50YXRpb25Db25maWcuZm9ybWF0fWApO1xyXG5cclxuICAgICAgICBpZiAoZG9jdW1lbnRhdGlvbkNvbmZpZy50aGVtZSkge1xyXG4gICAgICAgICAgICBhcmdzLnB1c2goYC0tdGhlbWU9JHtkb2N1bWVudGF0aW9uQ29uZmlnLnRoZW1lfWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRvY3VtZW50YXRpb25Db25maWcuc2hhbGxvdykge1xyXG4gICAgICAgICAgICBhcmdzLnB1c2goJy0tc2hhbGxvdycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRvY3VtZW50YXRpb25Db25maWcuZ2l0aHViKSB7XHJcbiAgICAgICAgICAgIGFyZ3MucHVzaCgnLS1naXRodWInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhlYyhhcmdzLmpvaW4oJyAnKSwge1xyXG4gICAgICAgICAgICBjd2Q6IF9jd2QsXHJcbiAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2RvY3VtZW50YXRpb24tbG9hZGVyIGVycm9yOiAnLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkb2N1bWVudGF0aW9uRGVmYXVsdHMgPSB7XHJcbiAgICAgICAgb3V0cHV0OiAnLi9kb2N1bWVudGF0aW9uJyxcclxuICAgICAgICBnaXRodWI6IGZhbHNlLFxyXG4gICAgICAgIGZvcm1hdDogJ2pzb24nLFxyXG4gICAgICAgIGNvbmZpZzogJycsXHJcbiAgICAgICAgdGhlbWU6IGZhbHNlLFxyXG4gICAgICAgIHNoYWxsb3c6IGZhbHNlLFxyXG4gICAgICAgIGVudHJ5OiB0aGlzLnJlc291cmNlUGF0aCxcclxuICAgIH07XHJcbiAgICBjb25zdCBnbG9iYWxTZXR0aW5ncyA9IHRoaXMub3B0aW9ucy5kb2N1bWVudGF0aW9uIHx8IHt9O1xyXG4gICAgLy8gY29uc3QgbG9hZGVyX3NldHRpbmdzID0gbG9hZGVyVXRpbHMucGFyc2VRdWVyeSh0aGlzLnF1ZXJ5KSB8fCB7fTtcclxuICAgIGRvY3VtZW50YXRpb25Db25maWcgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50YXRpb25EZWZhdWx0cywgZ2xvYmFsU2V0dGluZ3MpO1xyXG4gICAgdGhpcy5jYWNoZWFibGUoKTtcclxuICAgIGlmIChkb2N1bWVudGF0aW9uQ29uZmlnLmVudHJ5LmluZGV4T2YoX2N3ZCkgPT09IDApIHtcclxuICAgICAgICBkb2N1bWVudGF0aW9uQ29uZmlnLmVudHJ5ID0gZG9jdW1lbnRhdGlvbkNvbmZpZy5lbnRyeS5zdWJzdHIoX2N3ZC5sZW5ndGggKyAxKTtcclxuICAgIH1cclxuICAgIGNvbmZpZ0NXRCgpO1xyXG4gICAgdGhpcy5jYWxsYmFjayhudWxsLCBzb3VyY2UsIG1hcCk7XHJcbn07XHJcbiJdfQ==