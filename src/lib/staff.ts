import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Founder from 'public/employee-1.png'
import CEO from 'public/employee-2.png'
import ManagingDirector from 'public/employee-3.png'
import SeniorVP from 'public/employee-4.png'
import VP from 'public/employee-5.png'

export type EmployeeCard = {
  img: StaticImport | string,
  name: string,
  position: string,
}

const employeeCards: EmployeeCard[] = [
  { img: Founder, name: "Harvey Specter", position: "Co-founder & CEO" },
  { img: CEO, name: "Mike Ross", position: "Co-Founder & CFO" },
  { img: ManagingDirector, name: "Jim Simons", position: "Managing director" },
  { img: SeniorVP, name: "Carl Icahn", position: "Senior vice president" },
  { img: VP, name: "Jamie Dimon", position: "Vice president" },
];

export default employeeCards;