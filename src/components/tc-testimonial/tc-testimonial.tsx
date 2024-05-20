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
  @Prop() imageOnLeft: boolean = false; 
  @Prop() altText: string = "Picture";
  @Prop() role: string;
  @Prop() pro: string;
  @Prop() background: string = "white";

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
          class="drop-shadow-2xl object-cover max-w-full h-auto"
        />
      </div>
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
        <blockquote
          class={{
            "text-lg": true,
            "p-4": true,
            "m-0": true,
            "mb-1": true,
            "font-sans": true,
          }}
          style={{ background: this.background }}
        >
          <span class="text-4xl text-gray-400">“</span>
          <p class="inline font-sans leading-loose">{this.quote}</p>
          <span class="text-4xl text-gray-400 leading-none">”</span>
        </blockquote>
        <div class="text-justify font-sans italic">
          <p>
            {this.name}, {this.role}
          </p>
        </div>
      </div>
    );

    return (
      <div class="flex flex-col items-center w-full gap-8 px-4 py-2 md:flex-row">
        {this.imageOnLeft ? imageSection : textSection}
        {this.imageOnLeft ? textSection : imageSection}
      </div>
    );
  }
}
