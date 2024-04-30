import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'tc-job-listing',
  styleUrl: 'tc-job-listing.css',
  shadow: true
})
export class JobListing {
  @Prop() title: string;
  @Prop() description: string;
  @Prop() tags: Array<string>;

  render() {
    return (
      <div class="job-listing p-4 border-2 border-red-700 border-solid rounded">
        <h5 class="mb-2 text-lg font-bold font-sans">{this.title}</h5>
        <p class="font-sans">{this.description}</p>
        <ul class="flex flex-row flex-wrap items-end justify-between gap-2">
          {this.tags.map(tag => (
            <li key={tag} class="px-2 py-1 text-gray-600 bg-gray-200 rounded-lg">{tag}</li>
          ))}
        </ul>
      </div>
    );
  }
}
