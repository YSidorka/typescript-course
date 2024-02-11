import { User } from './user.class';
import { Company } from './company.class';
import { CustomMap } from './map.class';

const user = new User();
const company = new Company();

const map = new CustomMap(document.querySelector('.map') as HTMLElement);
map.addMarker(user);
map.addMarker(company);
