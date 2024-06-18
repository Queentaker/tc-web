import { Component, h, Prop, State } from "@stencil/core";

@Component({
  tag: "tc-project",
  styleUrl: "tc-project.css",
  shadow: true,
})
export class TcProject {
  @Prop() projectTitle: string;
  @Prop() projectDescription: string;
  @Prop() projectDetails: string;
  @Prop() tags: string = "[]";
  @Prop() imageSrc: string;
  @Prop() quote1: string;
  @Prop() quote2: string = "";

  get tagsArray() {
    try {
      return JSON.parse(this.tags);
    } catch (e) {
      console.error("Error parsing tags:", e);
      return [];
    }
  }

  @State() showDetails: boolean = false;
  toggleDetails = () => {
    this.showDetails = !this.showDetails;
  };

  render() {
    return (
      <div class=" px-3 py-2 border border-gray-200 border-solid shadow md:p-4 md:px-6 font-sans font-normal mb-2">
        <div class="flex flex-col items-start justify-between md:flex-row">
          <div>
            <h4 class="!m-0 text-xl md:text-3xl font-semibold">
              {this.projectTitle}
            </h4>
            <div class="mt-2 text-lg">{this.projectDescription}</div>
            <div class="hidden mt-2 md:block">
              <button
                class="text-white font-semibold bg-uzhblue border-uzhblue hover:text-white  py-2 px-4 border hover:border-transparent rounded-full cursor-pointer"
                onClick={this.toggleDetails}
              >
                {this.showDetails ? "Weniger Details" : "Mehr Details"}
              </button>
            </div>
          </div>
          <div class="flex flex-row flex-wrap gap-2 mt-2">
            {this.tagsArray.map((tag) => (
              <div class="px-2 py-1 text-gray-600 bg-gray-200 md:mt-0 font-medium">
                {tag}
              </div>
            ))}
          </div>
        </div>
        {this.showDetails && (
          <slot></slot>
        )}
      </div>
    );
  }
}
