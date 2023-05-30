<h1 style="text-align: center; color: #48bb37">React Day Theme Toggle</h1>
<hr>
<h4 style="text-align: center">A beautiful <span style="color: #48bb37">day / night</span> theme toggle with his context for your react application</h4>

<h5>Versions</h5>
[![Npm package version](https://badgen.net/npm/v/npm)](https://npmjs.com/package/react-day-theme-toggle)

<h5>Dependencies</h5>
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

<hr>

<h2>Installing</h2>
Using npm:

<code style="padding: 10px;">$ npm install -s react-day-theme-toggle</code>

Using yarn:

<code style="padding: 10px;">$ yarn install -s react-day-theme-toggle</code>

<br/>
<hr>

<h2>Working with it</h2>

<p>The module exports a component called ThemeContextProvider, that has to wrap your application and provides those two values : {theme, setTheme}.
So first, wrap your app inside the component ThemeContextProvider.
</p>

```js
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import {ThemeContextProvider} from "react-day-theme-toggle/ThemeContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
      <ThemeContextProvider>
          <App/>
      </ThemeContextProvider>
  </React.StrictMode>
);
```

<p>Then you can access the values of the theme state with the custom hook useThemeContext</p>

```js
import {useThemeContext} from "react-day-theme-toggle/ThemeContextProvider";

function App() {

    const {theme, setTheme} = useThemeContext()

    return (
        <div>
            {theme}
        </div>
    );
}

export default App;
```

Finally use the component DayNightToggle to display a nice toggle in your header or somewhere else.
We will be allowing you to choose different style versions of the toggle in next versions.

Beware to wrap the component in a div, the toggle will take 100% of its parent width.

```js
import React from 'react';
import DayNightToggle from "react-day-theme-toggle/DayNightToggle";

const Header = () => {
    return (
        <div>
            <DayNightToggle/>
        </div>
    );
};

export default Header;
```

<br/>

<hr>

<h2>Styles</h2>
<br/>

<h5>Default</h5>
<br/>

![image](https://github.com/LFaugeron/react-day-theme-toggle/assets/124144103/95939653-ea3b-4239-9b35-f24123c12348)
![image](https://github.com/LFaugeron/react-day-theme-toggle/assets/124144103/9d00bed2-a499-46e4-8f83-bc5ea3bdeaba)

https://github.com/LFaugeron/react-day-theme-toggle/assets/124144103/aa3cd01e-6d55-4d6a-86c2-782faecb6f12

