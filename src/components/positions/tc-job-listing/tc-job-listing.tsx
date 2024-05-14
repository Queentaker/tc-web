import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "tc-job-listing",
  styleUrl: "tc-job-listing.css",
  shadow: true,
})
export class JobListing {
  @Prop() jobTitle: string;
  @Prop() description: string;
  @Prop() tags: string;

  get tagsArray() {
    try {
      return JSON.parse(this.tags);
    } catch (e) {
      console.error("Error parsing tags:", e);
      return []; 
    }
  }

  render() {
    return (
      <div class="px-3 py-2 border border-gray-200 border-solid shadow md:p-4 md:px-6 "> 
        <h5 class="mb-2 text-lg font-bold font-sans">{this.jobTitle}</h5>
        <p class="font-sans">{this.description}</p>
        <ul class="flex flex-row gap-2">
          {this.tagsArray.map((tag) => (
            <div class="px-2 py-1 mt-2 text-gray-600 bg-gray-200 rounded-lg font-sans md:mt-0">
              {tag}
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
