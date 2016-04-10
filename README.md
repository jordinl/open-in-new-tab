#open-in-new-tab

Firefox add on to open all links in a new tab when you ctrl+click (or cmd+click in OSX).

## Development

#### Dependencies

Install [jpm](https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/jpm)

##### Running add-on locally

Run `jpm run`

#### Releasing the add-on

* Bump version in package.json
* Run `jpm sign --api-key $key --api-secret $secret`
