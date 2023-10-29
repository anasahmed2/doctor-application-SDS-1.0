import { Eye, HeartPulse, Stethoscope, Syringe } from "lucide-react";

const features = [
  {
    name: "Ophthalmology",
    description:
      "Ophthalmology is the specialized field of medicine that focuses on the health of the eye. It includes the anatomy, physiology and diseases that may affect the eye.",
    icon: "Eye",
  },
  {
    name: "Cardiology",
    description:
      "Cardiology is a branch of medicine that deals with disorders of the heart and the cardiovascular system.",
    icon: "HeartPulse",
  },
  {
    name: "Dentistry",
    description:
      "Dentistry, the profession concerned with the prevention and treatment of oral disease, including diseases of the teeth and supporting structures and diseases of the soft tissues of the mouth.",
    icon: "Stethoscope",
  },
  {
    name: "Pediatrics",
    description:
      "Pediatrics is the branch of medicine dealing with the health and medical care of infants, children, and adolescents from birth up to the age of 18.",
    icon: "Syringe",
  },
];

export default function Features() {
  return (
    <div className="bg-[#d8fcfd] pt-10 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-bold leading-7 text-teal-600">
            Our Services
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-teal-500 sm:text-4xl">
            How we can help you
          </p>
          <p className="mt-6 text-base leading-8 text-gray-600 font-medium">
            READ MORE ABOUT OUR SERVICES
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <div className="text-lg font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r to-teal-400 from-teal-500">
                    {feature.icon == "Eye" ? <Eye className="text-white drop-shadow-lg" /> : feature.icon == "HeartPulse" ? <HeartPulse className="text-white drop-shadow-lg" /> : feature.icon == "Stethoscope" ? <Stethoscope className="text-white drop-shadow-lg" /> : <Syringe className="text-white drop-shadow-lg" />}
                  </div>
                  {feature.name}
                </div>
                <div className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}