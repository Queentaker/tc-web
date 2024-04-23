/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface FrameworkItem {
        "image": string;
        "title": string;
    }
    interface SegmentContainer {
        "backgroundColor"?: string;
        "id": string;
        "segTitle": string;
    }
    interface TcBenefitsSection {
        "benefits": { imageSrc: string, title: string, description: string }[];
    }
    interface TcFavoriteTech {
        "favTitle": string;
        "technologies": Array<{ imgSrc: string; name: string; description: string }>;
    }
    interface TcJobCard {
        "detailedDescription": string;
        "imageSrc": string;
        "jobTitle": string;
        "shortDescription": string;
    }
    interface TcTestimonial {
        "altText": string;
        "imageOnLeft": boolean;
        "imageSrc": string;
        "name": string;
        "pro": string;
        "quote": string;
        "role": string;
    }
    interface TcTitle {
        "text": string;
    }
}
declare global {
    interface HTMLFrameworkItemElement extends Components.FrameworkItem, HTMLStencilElement {
    }
    var HTMLFrameworkItemElement: {
        prototype: HTMLFrameworkItemElement;
        new (): HTMLFrameworkItemElement;
    };
    interface HTMLSegmentContainerElement extends Components.SegmentContainer, HTMLStencilElement {
    }
    var HTMLSegmentContainerElement: {
        prototype: HTMLSegmentContainerElement;
        new (): HTMLSegmentContainerElement;
    };
    interface HTMLTcBenefitsSectionElement extends Components.TcBenefitsSection, HTMLStencilElement {
    }
    var HTMLTcBenefitsSectionElement: {
        prototype: HTMLTcBenefitsSectionElement;
        new (): HTMLTcBenefitsSectionElement;
    };
    interface HTMLTcFavoriteTechElement extends Components.TcFavoriteTech, HTMLStencilElement {
    }
    var HTMLTcFavoriteTechElement: {
        prototype: HTMLTcFavoriteTechElement;
        new (): HTMLTcFavoriteTechElement;
    };
    interface HTMLTcJobCardElement extends Components.TcJobCard, HTMLStencilElement {
    }
    var HTMLTcJobCardElement: {
        prototype: HTMLTcJobCardElement;
        new (): HTMLTcJobCardElement;
    };
    interface HTMLTcTestimonialElement extends Components.TcTestimonial, HTMLStencilElement {
    }
    var HTMLTcTestimonialElement: {
        prototype: HTMLTcTestimonialElement;
        new (): HTMLTcTestimonialElement;
    };
    interface HTMLTcTitleElement extends Components.TcTitle, HTMLStencilElement {
    }
    var HTMLTcTitleElement: {
        prototype: HTMLTcTitleElement;
        new (): HTMLTcTitleElement;
    };
    interface HTMLElementTagNameMap {
        "framework-item": HTMLFrameworkItemElement;
        "segment-container": HTMLSegmentContainerElement;
        "tc-benefits-section": HTMLTcBenefitsSectionElement;
        "tc-favorite-tech": HTMLTcFavoriteTechElement;
        "tc-job-card": HTMLTcJobCardElement;
        "tc-testimonial": HTMLTcTestimonialElement;
        "tc-title": HTMLTcTitleElement;
    }
}
declare namespace LocalJSX {
    interface FrameworkItem {
        "image"?: string;
        "title"?: string;
    }
    interface SegmentContainer {
        "backgroundColor"?: string;
        "id"?: string;
        "segTitle"?: string;
    }
    interface TcBenefitsSection {
        "benefits"?: { imageSrc: string, title: string, description: string }[];
    }
    interface TcFavoriteTech {
        "favTitle"?: string;
        "technologies"?: Array<{ imgSrc: string; name: string; description: string }>;
    }
    interface TcJobCard {
        "detailedDescription"?: string;
        "imageSrc"?: string;
        "jobTitle"?: string;
        "shortDescription"?: string;
    }
    interface TcTestimonial {
        "altText"?: string;
        "imageOnLeft"?: boolean;
        "imageSrc"?: string;
        "name"?: string;
        "pro"?: string;
        "quote"?: string;
        "role"?: string;
    }
    interface TcTitle {
        "text"?: string;
    }
    interface IntrinsicElements {
        "framework-item": FrameworkItem;
        "segment-container": SegmentContainer;
        "tc-benefits-section": TcBenefitsSection;
        "tc-favorite-tech": TcFavoriteTech;
        "tc-job-card": TcJobCard;
        "tc-testimonial": TcTestimonial;
        "tc-title": TcTitle;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "framework-item": LocalJSX.FrameworkItem & JSXBase.HTMLAttributes<HTMLFrameworkItemElement>;
            "segment-container": LocalJSX.SegmentContainer & JSXBase.HTMLAttributes<HTMLSegmentContainerElement>;
            "tc-benefits-section": LocalJSX.TcBenefitsSection & JSXBase.HTMLAttributes<HTMLTcBenefitsSectionElement>;
            "tc-favorite-tech": LocalJSX.TcFavoriteTech & JSXBase.HTMLAttributes<HTMLTcFavoriteTechElement>;
            "tc-job-card": LocalJSX.TcJobCard & JSXBase.HTMLAttributes<HTMLTcJobCardElement>;
            "tc-testimonial": LocalJSX.TcTestimonial & JSXBase.HTMLAttributes<HTMLTcTestimonialElement>;
            "tc-title": LocalJSX.TcTitle & JSXBase.HTMLAttributes<HTMLTcTitleElement>;
        }
    }
}
