import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "tc-prerequisite",
  styleUrl: "tc-prerequisite.css",
  shadow: true,
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
      <div class="px-4 py-2 font-sans shadow-md m-2">
        <h4 class="text-xl  md:text-3xl leading-normal text-center px-4">
          {this.header}
        </h4>

        <ul class="pl-5 ">
          {this.requirementsArray.map((requirement, index) => (
            <li key={index} class="mt-1 text-base">
              {requirement}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
