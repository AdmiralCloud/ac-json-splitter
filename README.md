# AC JSON Splitter
Splits a given JSON file into chunks based on size parameter (default 256kb). Splitting is done "property safe".

![example workflow](https://github.com/admiralcloud/ac-json-splitter/actions/workflows/node.js.yml/badge.svg)

# Usage
```
const acjsplit = require('./index')

let json = {
  number: 1,
  test: 'This is a text',
  thai: 'นี่เป็นข้อความภาษาไทยที่มีอักขระ UTF-8 จำนวนมาก'
}
acjsplit.split(json, { size: 48})

// Result
[
  { number: 1, test: 'This is a text' },
  { thai: 'นี่เป็นข้อความภาษาไทยที่มีอักขระ UTF-8 จำนวนมาก' }
]
```


## Links
- [Website](https://www.admiralcloud.com/)

## License
[MIT License](https://opensource.org/licenses/MIT) Copyright © 2009-present, AdmiralCloud AG