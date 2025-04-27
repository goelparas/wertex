import dynamic from "next/dynamic";

const CncMachine = dynamic(() => import("@/components/ui/services/cncmachine"));
const Casting = dynamic(() => import("@/components/ui/services/casting"));
const Forging = dynamic(() => import("@/components/ui/services/forging"));
const SheetFabrication = dynamic(
  () => import("@/components/ui/services/sheet-fabrication")
);
const AluminiumExtrusion = dynamic(
  () => import("@/components/ui/services/aluminium-extrusion")
);
const Molding = dynamic(() => import("@/components/ui/services/molding"));
const SurfaceTreatment = dynamic(
  () => import("@/components/ui/services/surface-treatment")
);

export const ServicesPageConst = [
  {
    title: "cnc-machining",
    page: CncMachine,
  },
  {
    title: "casting",
    page: Casting
  },
  {
    title: "forging",
    page: Forging ,
  },
  {
    title: "sheet-metal-fabrication",
    page: SheetFabrication,
  },
  {
    title: "aluminium-extrusion",
    page: AluminiumExtrusion, 
  },
  {
    title: "molding",
    page: Molding,
  },
  {
    title: "surface-treatment",
    page: SurfaceTreatment,
  },
];
