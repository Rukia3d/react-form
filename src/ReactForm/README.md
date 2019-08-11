# ReactForm

React form component renders a form with a structure defined by a JSON stringify
provided as its input prop. On submission the resulting form data is provided back to
a callback function given as an output prop.

Example usage:

``` jsx
const input = JSON.stringify([
  { id: 'name', type: 'name', label: 'Name' },
  { id: 'dob', type: 'date', label: 'DOB' },
  { id: 'gender', type: 'gender', label: 'Gender' },
  { id: 'contact', type: 'contact', label: 'Contacts' },
]);

<ReactForm
  input={input}
  output={data => window.alert(JSON.stringify(data))}
/>
```
Example output:
``` js
{
    name: "John Foo",
    dob: "1990-01-01",
    gender: 1,
    contact: [{
        type: "mobile",
        value: "0400123123"
    },{
        type: "home",
        value: "610000000"
    }]
}
```

Form schema is defined as an array of form element definitions. Each form elements
definition is an object with the following required keys:

* `id` - a unique string id for this element that will be used to identify its data in the returned output.
* `label` - string label for the element that will be displayed on a page.
* `type` - one of the predefined types of the element, see below for details.

## Supported element types

### Name
Person's name, at least 2 words.

Input example: `{ id: 'name', type: 'name', label: 'Name' }`

Output example: `name: 'John Foo'`

### Date
Person's date of birth, minimum 18 years old.

Input example: ` { id: 'dob', type: 'date', label: 'DOB' }`

Output example: `dob: '1990-01-01'`

### Gender
Optional person's gender 1 - male, 2-female

Input example:  `{ id: 'gender', type: 'gender', label: 'Gender' }`

Output example: `gender: 1`

### Contact
Array of contact information each element is an object with a type and phone keys.

Input example: `{ id: 'contact', type: 'contact', label: 'Contact' }`

Output example:  

```
contact: [{
        type: "mobile",
        value: "0400123123"
    },{
        type: "home",
        value: "610000000"
    }]
```
