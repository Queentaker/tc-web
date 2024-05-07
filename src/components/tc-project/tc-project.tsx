import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'tc-project',
  styleUrl: 'tc-project.css',
  shadow: true
})

export class TcProject {
  @Prop () projectTitle: string;
  @Prop () projectDescription: string;
  @Prop () projectDetails: string;  
  @Prop () tags: string = '[]';
  @Prop () imageSrc: string;

      
  get tagsArray() {
    try {
    return JSON.parse(this.tags);
    } catch (e) {
    console.error('Error parsing tags:', e);
    return []; 
    }
}

  @State() showDetails: boolean = false;
  toggleDetails = () => {
    this.showDetails = !this.showDetails;
  }

  render() {
    return (
      <div class="px-3 py-2 border border-gray-200 border-solid shadow cursor-pointer rounded-xl md:p-4 md:px-6 ">
        <div class="flex flex-col items-start justify-between md:flex-row">
          <div>
            <h4 class="!m-0 text-xl font-normal md:text-3xl font-sans font-bold">{this.projectTitle}</h4>
            <div class="mt-2 text-lg font-sans font-plain">{this.projectDescription}</div>
            <div class="hidden mt-2 md:block">

              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold  font-sans hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={this.toggleDetails}>
              {this.showDetails ? 'Weniger Details' : 'Mehr Details'}
              </button>
            </div>
          </div>
          <div class="flex flex-row flex-wrap gap-2 mt-2">

          {this.tagsArray.map(tag => (
                            <div class="px-2 py-1 text-gray-600 bg-gray-200 rounded-lg md:mt-0">
                            {tag}
                          </div>

                ))}
          </div>
        </div>
        {this.showDetails && (
          <div class="pt-4 mt-4 border-t border-gray-200">
            <div class="flex flex-col gap-8 md:gap-16 md:flex-row">
              <div class="flex-initial md:w-[400px]">
                <div class="relative">
                  <img alt="Project Image" src={this.imageSrc} class="max-w-full h-auto"></img>
                </div>
              </div>
              <div class="flex-1">
                <p class="prose prose-lg max-w-none">
                  {this.projectDetails}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
