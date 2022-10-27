import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const customers = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;
  try {
    var img=require(`assets/static/mock-images/avatars/avatar_${setIndex}.jpg`);
    
  } catch (error) {
    var img='/notfound';
  }
  return {
  id: faker.datatype.uuid(),  
  avatarUrl: img,
  name: faker.name.findName(),
  company: faker.company.companyName(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  role: sample([
    'Leader',
    'Hr Manager',
    'UI Designer',
    'UX Designer',
    'UI/UX Designer',
    'Project Manager',
    'Backend Developer',
    'Full Stack Designer',
    'Front End Developer',
    'Full Stack Developer',
  ]),
};
});

export default customers;
