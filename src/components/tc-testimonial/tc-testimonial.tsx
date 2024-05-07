import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "tc-testimonial",
  styleUrl: "tc-testimonial.css",
  shadow: true,
})
export class MyTestimonial {
  @Prop() imageSrc: string;
  @Prop() quote: string;
  @Prop() name: string;
  @Prop() imageOnLeft: boolean = false; // New property to control image position
  @Prop() altText: string = "Picture";
  @Prop() role: string;
  @Prop() pro: string;

  render() {
    const imageSection = (
      <div
        class={{
          "order-1 md:order-1": this.imageOnLeft,
          "order-2 md:order-2": !this.imageOnLeft,
          "w-full md:w-[330px]": true,
          "px-4": true,
        }}
      >
        <img
          alt={this.altText}
          src={this.imageSrc}
          class="rounded-xl object-cover max-w-full h-auto"
        />
      </div>
    );

    const quoteMarkOpen = <span class="text-4xl text-gray-400">“</span>;
    const quoteMarkClose = (
      <span class="text-4xl text-gray-400 leading-none">”</span>
    );

    const textSection = (
      <div
        class={{
          "flex-1": true,
          "order-2 md:order-2": this.imageOnLeft,
          "order-1 md:order-1": !this.imageOnLeft,
          "px-4": true,
        }}
      >
        <h3 class="text-2xl font-bold font-sans">{this.pro}</h3>
        <blockquote class="mt-4 mb-4 text-lg rounded-xl bg-gray-100 p-4 font-sans">
          {quoteMarkOpen}
          <p class="inline font-sans">{this.quote}</p>
          {quoteMarkClose}
        </blockquote>
        <p class="text-md font-sans">
          {this.name}, {this.role}
        </p>
      </div>
    );

    return (
      <div
        class={{
          flex: true,
          "flex-col": true,
          "items-center": true,
          "w-full": true,
          "gap-8": true,
          "px-4": true,
          "py-2": true,
          "md:flex-row": true,
        }}
      >
        {this.imageOnLeft ? imageSection : textSection}
        {this.imageOnLeft ? textSection : imageSection}
        <p> </p>
      </div>
    );
  }
}
