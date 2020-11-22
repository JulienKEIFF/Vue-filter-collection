# Vue-filter-collection
A collection of useful vue filter

* [Install](#install)
    * [Direct include](#Direct-include)
* [Filters](#Filters)
  * [String filters (10)](#String-filters-(10))
  * [Number filters (5)](#Number-filters-(5))
  * [Utils filters (2)](#Utils-filters-(2))

## Install
---
### Direct include
To easily install Vue-filter-collection, you just need to include it after Vue.js like this:

```html
<!-- Vue.js -->
<script src="./vue.js"></script>
<!-- Vue-filter-collection -->
<script src="../index.js"></script> 
```

Then you just need to call Vue.use with the desired component in parameter :

```javascript
Vue.use(textFilter);
```



## Filters

### String Filters (10)
---
This is the list of all string filter and how to use it

#### capitalize
This filter allows you to capitalize the first letter of the string:
```javascript
{{ "someString" | capitalize }} 
//=> "SomeString"
```

#### append
This filter allows you to append other string to the base string.
You can pass two parameters :

* valueToAppend: The string to append
* space: bool to have a space between the two strings (false by default)

```javascript
{{ "someString" | append("other string") }} 
//=> "someStringother string"

{{ "someString" | append("other string", true) }} 
//=> "someString other string"
```

#### prepend
This filter allows you to prepend other string to the base string.
You can pass two parameters :

* valueToPrepend: The string to prepend
* space: bool to have a space between the two strings (false by default)

```javascript
{{ "someString" | prepend("other string") }} 
//=> "other stringsomeString"

{{ "someString" | prepend("other string", true) }} 
//=> "other string someString"
```

#### remove-text
This filter allows you to remove value from the base string.
You can pass one parameter :

* valueToRemove: Value for the text removal

```javascript
{{ "someString" | remove-text("String") }} 
//=> "some"
```

#### replace
This filter allows you to replace value in the entry string by an another string once or for all.
You can pass three parameters :

* valueToReplace: The string to replace
* replaceValue: The replace value
* once: bool use for replace the first occurence (true by default)

```javascript
{{ "some string to replace the word 'string'" | replace("string", "replaced") }} 
//=> "some relaced to replace the word 'string'""

{{ "some string to replace the word 'string'" | replace("string", "replaced", false) }} 
//=> "some replaced to replace the word 'replaced'"
```

#### trim
This filter allows you to trim the string:

```javascript
{{ "    some string  " | trim }} 
//=> "some string"
```

#### truncate
This filter allows you to fix a max length value for the entry string. You can chain the "append" filter to add symbol. This filter have one parameter:

* maxValueLength: The length max of the string

```javascript
{{ "some string very long and i want to truncate it" | truncate(10) }} 
//=> "some strin"

{{ "some string very long and i want to truncate it" | truncate(10) | append("...") }} 
//=> "some strin..."
```

#### uppercase
This filter allows you to transform all the entry string in uppercase characters.

```javascript
{{ "some string" | uppercase }} 
//=> "SOME STRING"
```

#### lowercase
This filter allows you to transform all the entry string in lowercase characters.

```javascript
{{ "SOME STRING" | lowercase }} 
//=> "some string"
```

#### remove-accents
This filter allows you to remove all accents in a string.

```javascript
{{ "sôme strïng" | remove-accents }} 
//=> "some string"
```



### Number Filters (5)
---
This is the list of all number filter and how to use it

#### operator
This filter allows you to make operations. You can use :
* '+' : Use it to do an addition
* '-' : Use it to do a subtraction
* '/' : Use it to do a division
* '*' : Use it to do a multiplication
* '%' : Use it to do a modulo

This filter use a second number parameter like this:
```javascript
{{ 5 | operator("+", 5) }} 
//=> 10

{{ 5 | operator("-", 5) }} 
//=> 0
```

#### array-sum
This filter allows you to addition all number item in array.
```javascript
{{ [1,2,3,4,5,6] | array-sum() }} 
//=> 21
```

#### ceil
This filter allows you to ceil your number.
```javascript
{{ 1.3 | ceil }} 
//=> 2
```

#### floor
This filter allows you to ceil your number.
```javascript
{{ 1.3 | floor }} 
//=> 1
```

#### base

This filter allows you to change your number base. You can pass one parameter:
* targetBase: The target base for the number conversion 

```javascript
{{ 1.3 | base(16) }} 
//=> 1
```

### Utils Filters (2)
---
This is the list of all utils filter and how to use it

#### placeholder
This filter allows you to make an placeholder if your value is empty. This filter take one parameter :
* msg: The message you want to display

```javascript
{{ null | placeholder("This is a placeholder") }} 
//=> "This is a placeholder"
```

#### currency
This filter allows you to append a currency symbol and where to place it (left or rigth). This filter take two parameter :
* currencySymbol: The currency symbole to display ($ by default)
* symbolLeft: bool to display the symbol on the left (false by default)
* currencySpace: bool to place a space beetween the symbol and the number (true by default) 

```javascript
{{ 200 | currency("€", false, true) }} 
//=> 200 €

{{ 200 | currency("$", true, true) }} 
//=> $ 200

{{ 200 | currency("€", true, false) }} 
//=> €200
```