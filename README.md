# FastSwap UIkit

## Install

In project file package.json in prop "dependencies" add "@fastswap-uikit" : "git+ssh://git@git.sfxdx.ru:fastswap/fastswap-uikit.git#server"

### Theme

Before using Pancake UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@pancakeswap-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Add new
when you add new changes yarn build then push new /dist in server branch