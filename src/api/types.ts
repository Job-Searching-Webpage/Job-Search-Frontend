export interface Job {
  id: number;
  title: string;
  organization: string;
  degree: string;
  jobType: string;
  location: string;
  minimumQualifications: string[];
  preferredQualifications: string[];
  description: string[];
  dateAdded: string;
}

export interface Degree {
  id: number;
  degree: string;
}

export interface Team {
  CF: string;
  id: number;
  name: string;
  cognome: string;
  dataNascita: string;
  birthplace: string;
  nazionalita: string;
  address: string;
  jobType: string;
  period: string;
  phone: string;
  email: string;
  languages: string[];
  patenta: string;
  car: string;
  qualification: string;
  esperienze: experience[];
  backUpPerson: BackUpPerson[];
}

export interface experience {
  azienda: string;
  periodo: string;
  duties: string;
  luogo: string;
  payment: string;
}

export interface BackUpPerson {
  name: string;
  cognome: string;
  email: string;
  phone: string;
}
