# Faustão Authenticator

Contributions to Faustão Authenticator are welcome

Have a look in the [issues tab](https://github.com/luanorlandi/faustao-authenticator/issues) or feel free make pull requests for any improvement.

## Add more website for authentication

If you have a website that you like to add to the extension, follow these instructions:

- Modify `manifest.json` with the new website and script file added to `script` directory
- In your new script file, make the verification by inspecting the HTML changes in the page
- Make sure your verification is only for failed authentication

Also, have a look at the code of currently supported sites.

If your verification is simple and happens right when the page loads, see [`script/facebook.js`](https://github.com/luanorlandi/faustao-authenticator/blob/master/script/googleAccounts.js).

If your verification is complex and happens with DOM changes, see [`script/accountsGoogle.js`](https://github.com/luanorlandi/faustao-authenticator/blob/master/script/googleAccounts.js).

## List of supported sites

- Google
- Facebook
- Instagram

## License

MIT