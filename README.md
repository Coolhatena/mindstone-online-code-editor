Welcome to MindStone Programming Language
=========================================

MindStone is a beginner programming language, designed to have the logical simplicity of languages like Python but the complexity in types and sintax from strongly-typed languages.

## Getting Started
To start coding in MindStone, just use the `Start -->` command followed by curly braces:
```
start --> {

}
```

This will be your "main" function, inside those curly braces you can write all the code you need, note that all sentences should end with `!` as EOL.

### **Variable declarations:**

You can declare any variables you need on your program, the sintax is `DATA_TYPE` `VARIABLE_NAME` ( = `VALUE`)?!, note that the starting value of the variable is optional, if the starting value its not provided the variable will be assigned `null` by default. 

The variables names on mindstone can use letters and numbers, but the starting character of the name should be a letter.

Currently MindStone has 3 data types: 
* ent: Used for Integer values, such as `3`, `7.0`, `27`.
* pdec:  Used for Floating point values, such as `1.2`, `4.5`, `32.8`.
* ctr: Used for Character values, such as `'a'`, `'q'`, `'z'`.

So, for example, to make a program that just generates one variable with a specific value you could use the following code:
```
start --> {
  ent var1 = 1!
}
```
You can also use the result of a operation (+, -, *, /) as the value of a variable:
```
start --> {
  ent var1 = 1!
  ent var2 = var1 + 3!
}
```

### **Variable assignations:**

To change the value of a variable after declaration use the following sintax: `VARIABLENAME` = `NEW_VALUE`!

Using the example seen before, we can re-assing the variable `var1` to another value:
```
start --> {
  ent var1 = 1!
  ent var2 = var1 + 3!
  var1 = 2!
}
```

### **Console prints**

MindStone has a command to log any value you want on the native console of the editor, this value could be a variable, a operations result or a hard-typed value as `1` or `'a'`, the syntax for this is `ptr( VALUE )`.

The following code will display `3`, `30` and `1` on the console respectively.

```
start --> {
  ent var1 = 3!
  ptr(var1)!
  ptr(var1 * 10)!
  ptr(1)!
}
```

### **Conditions**
Currently, MindStone has the following condition operators available:
- '>'
- '<'
- '>='
- '<='
- '||'
- '&&'
- '=='
- '!='
- 'true'
- 'false'

### **Conditional sentences**
Conditionals are the pillar of responsive programing, in MindStone, you can change the flow of your code based on a condition using the conditional sentences.
#### If Statement
This is the most basic conditional, if the boolean value of the condition space is true,the code inside the brackets is executed 
```
start --> {
  if (5 > 3) {
    ptr("Hello World!")!
  }!
```
#### Else If Statement
You can chain multiple condition evaluations using else if, so if the first condition its not a truthy value you can still evaluate other conditions before taking and ultimate decision.
```
start --> {
  if (3 > 5) { // False
    ptr("Hello World!")!
  } else if( 5 < 3 ) { // true
    ptr("Hello else if")!
  }!
```
#### Else Statement
If theres no truthy condition on the conditional chain, the code flow will end on the else code block.
```
start --> {
  if (3 > 5) { // False
    ptr("Hello World!")!
  } else if( false ) { // false
    ptr("Hello else if")!
  } else {
    ptr("Hello else!")!
  }!
```

### **Loop structures**
Using loops, we can resolve problems that require iterative logic:

#### While loop
The while loop keeps executing his code block as long as his asociated condition evaluates as True.
The sintax for the while loop is the following:
```
// This example will print the numbers from 0 to 10
start --> {
  ent i = 0!
  while( i <= 10){
    ptr(i)!
    i++!
  }
```

# INTERNAL DEVELOPMENT ONLY

ANTL4 Setup
===========
Run `antlr -Dlanguage=JavaScript -o ./src/ -visitor -no-listener ./grammar/Language.g4` every time the grammar is changed on the project

NEXT.js Project setup
=====================
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
