export interface Post {
  id?: string;
  title: string;
  text: string;
  author: string;
  date: Date;
}

export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface Environment {
  apiKey: string;
  production: boolean;
}

export interface FbAuthRespone {
  idToken: string;
  expiresIn: string;
}
