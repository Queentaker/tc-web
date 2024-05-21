import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "tc-job-listing",
  styleUrl: "tc-job-listing.css",
  shadow: true,
})
export class JobListing {
  @Prop() jobTitle: string;
  @Prop() description: string;
  @Prop() tags: string; // Change to string to accept JSON string

  get tagsArray() {
    try {
      return JSON.parse(this.tags);
    } catch (e) {
      console.error("Error parsing tags:", e);
      return []; // Return empty array in case of error
    }
  }

  render() {
    return (
      <div class="px-3 py-2  border-solid border-uzhblue shadow md:p-4 md:px-6 font-sans font-normal m-auto max-w-[90rem]">
        <h5 class="mb-2 text-lg font-bold ">{this.jobTitle}</h5>
        <p>{this.description}</p>
        <ul class="flex flex-row gap-2">
          {this.tagsArray.map((tag) => (
            <div class="px-2 py-1 text-gray-600 bg-gray-200 md:mt-0 font-medium">
              {tag}
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
