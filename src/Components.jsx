import PopularLinks from "./PopularLinks";
import PremiumSection from "./PremiumSection";
import PricingSection from "./PricingSection";
import StatsBanner from "./Stats";
import TestimonialsAndFeatures from "./TestimonialFeature";


const Components = () => {
    return (
        <div>
            <StatsBanner></StatsBanner>
            <PopularLinks></PopularLinks>
            <PremiumSection></PremiumSection>
            <PricingSection></PricingSection>
            <TestimonialsAndFeatures></TestimonialsAndFeatures>
        </div>
    );
};

export default Components;