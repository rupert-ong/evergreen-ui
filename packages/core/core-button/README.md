# Button

Buttons make common actions immediately visible and easy to perform with one click or tap. They can be used for any type of action, including navigation.

For text based buttons (`text` | `contained` | `outlined`), you can use the `label` or `children` prop for the button's display.

For icon based buttons, you must specify a `children` prop.

## Usage

```javascript
import { Button } from "@evergreen-ui/core";

const handleClick = event => console.log(event);

// Defaults to 'text' button
<Button label="Action" onClick={handleClick} />
<Button onClick={handleClick}>Action</Button>

<Button variant="outlined" onClick={handleClick}>Action</Button>
<Button variant="contained" onClick={handleClick}>Action</Button>

// Can use inherited Button props from MUI
<Button label="Action" type="submit" endIcon={<KeyboardArrowDown />} onClick={handleClick} />
<Button label="Action" type="submit" startIcon={<KeyboardArrowDown />} onClick={handleClick} />

// 'icon' button variant
<Button variant="icon" onClick={handleClick}><KeyboardArrowDown /></Button>
```

## Properties

- Props are as provided under [Button Props (Material UI)](https://material-ui.com/api/button/#props)

| propName | type                                          | default                                                  | isRequired                  |
| -------- | --------------------------------------------- | -------------------------------------------------------- | --------------------------- |
| children | `ReactNode`                                   |                                                          | Yes (for icon variant only) |
| variant  | `text` \| `contained` \| `outlined` \| `icon` | 'text'                                                   | No                          |
| size     | `string`                                      | `small` \| `large` OR `small` \| `medium` (icon variant) | No                          |
| label    | `ReactNode` or `never` (icon variant)         |                                                          | No                          |
