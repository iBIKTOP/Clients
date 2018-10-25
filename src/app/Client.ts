export interface Client {
  general: General;
  job: Job;
  contact: Contact;
  address: Address;
}

interface General {
  avatar: string;
  firstName: string;
  lastName: string;
}
interface Job {
  company: string;
  title: string;
}
interface Contact {
  email: string;
  phone: string;
}
interface Address {
  city: string;
  country: string;
  street: string;
  zipCode: string;
}
