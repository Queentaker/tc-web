# stencil-tailwind-template

This repo is a template to use stencil with tailwind.

## Getting started with Stencil Component Tailwind

Clone the repo, and install the dependencies:

If you like rename the project to a name that better fits it.


```shell
cd tc-web
npm install
```

Start the stencil dev server:

```shell
npm start
```


## File Structure

├── src   
├── components   
├── component A                
│   ├── component A.tsx        
│   ├── component A.css                         
└── component B
├── index.html
├── package.json


To add new components make a new component folder in the component folder.
Checkout more on Stencil components [here](https://stenciljs.com/docs/component).
In that folder have a tsx file and css file.

Example tsx of title

```
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'tc-example-title',
  styleUrl: 'tc-example-title.css',
  shadow: true
})
export class TcExampleHeading {
  @Prop() text: string; 

  render() {
    return (
      <h3 class="!mb-12 text-3xl font-mono  text-center md:text-4xl">
        {this.text}
      </h3>
    );
  }
}

```



## Publishing

Here is a guide on how you can create/publish a libary.

Make sure to build the application this will auto-generate readmes for the elements in your libary. :

```shell
npm run build
```

Go to the package.json file.
Change the "name" of the pckg to the name you want it to have.
Once you are happy with the project you can publish. Make sure to have a [npm account](https://www.npmjs.com/), in order to publish. 

``` shell
npm publish
```
