'use strict';

const textFilter = {
  install (Vue) {

    //Capitalize the first letter
    Vue.filter('capitalize', function (value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    });

    //Append some text
    Vue.filter('append', function(value, valueToAppend, space = false){
      if(!valueToAppend) return value;

      if(space) return value + ' ' + valueToAppend;
      else return value + valueToAppend;
    });

    //Prepend some text
    Vue.filter('prepend', function(value, valueToPrepend, space = false){
      if(!valueToPrepend) return value;

      if(space) return valueToPrepend + ' ' + value;
      else return valueToPrepend + value;
    });

    //Remove all occurence of string
    Vue.filter('remove-text', function(value, valueToRemove){
      if(!value) return '';
      else if(!valueToRemove) return value;
      
      if(typeof value === "string"){
        value = value.split(valueToRemove).join('');
        return value;
      }else{
        return value;
      }
    });

    //Replace the first or all the occurence of string
    Vue.filter('replace', function(value, valueToReplace, replaceValue, once = true){
      if(!value) return '';
      else if(!valueToReplace || !replaceValue) return value;

      if(typeof value === "string"){
        if(once) return value.replace(valueToReplace, replaceValue);
        else return value.replaceAll(valueToReplace, replaceValue);
      }else return value;
    });

    //Trim the input string
    Vue.filter('trim', function(value){
      if(!value) return '';
      
      if(typeof value === "string"){
        return value.trim();
      }else return value;
    });

    //Truncate string
    Vue.filter('truncate', function(value, maxValueLength){
      if(!value) return '';
      else if(!maxValueLength) return value;
      
      if(typeof value === "string"){
        return value.slice(0, maxValueLength);
      }else return value;
    });

    //Uppercase string
    Vue.filter('uppercase', function(value){
      if(!value) return '';
      
      if(typeof value === "string"){
        return value.toUpperCase();
      }else return value;
    });
  
    //Lowercase string
    Vue.filter('lowercase', function(value){
      if(!value) return '';
      
      if(typeof value === "string"){
        return value.toLowerCase();
      }else return value;
    });

     //Remove accent from string
     Vue.filter('remove-accents', function(value){
      if(!value) return '';
      
      if(typeof value === "string"){
        let options = {
          '-' : ' ',
          'a' : 'á|à|ã|â|À|Á|Ã|Â',
          'e' : 'é|è|ê|É|È|Ê',
          'i' : 'í|ì|î|Í|Ì|Î',
          'o' : 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
          'u' : 'ú|ù|û|ü|Ú|Ù|Û|Ü',
          'c' : 'ç|Ç',
          'n' : 'ñ|Ñ'
      };
      for (let letter in options) {
          value = value.replace(new RegExp(options[letter], 'g'), letter);
      };
      return value;
      }else return value;
    });
  }
}

const numberFilter = {
  install (Vue) {

    //Make operation
    Vue.filter('operator', function (value, operator, operatorNumber) {
      if (!value) return value;
      else if(!operatorNumber) return value;

      if(typeof value === "number"){
        switch(operator){
          case '+':
            return value + operatorNumber;
          case '-':
            return value - operatorNumber;
          case '/':
            if(operatorNumber === 0){
              console.error("Divide by 0 impossible");
              break
            } 
            else return value / operatorNumber;
          case '*':
            return value * operatorNumber;
          case '%':
            return value % operatorNumber;
          default:
            return value;
        }
      }
    });

    //Add all number in array
    Vue.filter('array-sum', function(value){
      if(!value) return value;
      else if(typeof value !== "object") return value;

      let tempSum = 0;
      for (let i = 0; i < value.length; i++) {
        const el = value[i];
        if(typeof el === "number"){
          tempSum = tempSum + el;
        }
      }
      return tempSum;
    });

    //Ceil number
    Vue.filter('ceil', function(value){
      if(!value) return value;
      else if(typeof value !== "number") return value;

      return Math.ceil(value);
    });

    //Floor number
    Vue.filter('floor', function(value){
      if(!value) return value;
      else if(typeof value !== "number") return value;

      return Math.floor(value);
    });

    //Change the number base
    Vue.filter('base', function(value, targetBase){
      if(!value) return value;
      else if(typeof value !== "number") return value;

      return parseInt(value, targetBase);
    });
  }
}

const utilsFilter = {
  install (Vue){

    //Return msg if value is empty
    Vue.filter('placeholder', function(value, msg){
      if(!value && msg) return msg;
      else if (value) return value;
      else return '';
    })

    //Add currency symbol
    Vue.filter('currency', function(value, currencySymbol = "$", symbolLeft = false, currencySpace = true){
      if(!value) return value;
      
      if(symbolLeft){
        if(currencySpace) return currencySymbol + ' ' + value;
        else return currencySymbol + value;
      }else{
        if(currencySpace) return value + ' ' + currencySymbol;
        else return value + currencySymbol;
      } 

    })
  }

}