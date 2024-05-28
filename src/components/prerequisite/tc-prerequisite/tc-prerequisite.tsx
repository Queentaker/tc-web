import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'tc-prerequisite', 
  styleUrl: 'tc-prerequisite.css',
  shadow: true 
})
export class PrequisiteColumn {
  @Prop() header: string;
  @Prop() requirements: "[]";

  
  get requirementsArray() {
    try {
      return JSON.parse(this.requirements);
    } catch (e) {
      console.error("Error parsing tags:", e);
      return [];
    }
  }


  render() {
    return (
      <div class="px-4 py-2 font-sans">
        <h4 class="text-4xl  md:text-3xl leading-normal">
          {this.header}
        </h4>

      <ul class="pl-5">
      {this.requirementsArray.map((requirement, index) => (
        <li key={index} class="text-sm text-gray-700 mt-1">
          {requirement}
        </li>
      ))}
    </ul>
      </div>
    );
  }
}
