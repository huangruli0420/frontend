export interface Person{
  name:string;
  age: number;
}
export interface PersonData{
  name:string;
  age: number;
}
export interface TestInterface{
  name: string;
  getName():string;
}

//Dog api測試
export interface DogApiResponse {
  statusCode: number;
  data: PaginationData;
  message: string;
  success: boolean;
}
// 分頁資料介面
export interface PaginationData {
  page: number;
  limit: number;
  totalPages: number;
  previousPage: boolean;
  nextPage: boolean;
  totalItems: number;
  currentPageItems: number;
  data: DogData[]; // 狗資料陣列
}
// 狗資料介面
export interface DogData {
  weight: Measurement;
  height: Measurement;
  id: number;
  name: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  origin: string;
  reference_image_id: string;
  image: ImageData;
}
// 測量單位介面
export interface Measurement {
  imperial: string;
  metric: string;
}
// 圖片資料介面
export interface ImageData {
  id: string;
  width: number;
  height: number;
  url: string;
}


//User api測試
// export interface UserData{
//     gender: string,
//     name: {
//       title: string,
//       first: string,
//       last: string,
//     },
//     location: {
//       street: {
//         number: number,
//         name: string,
//       },
//       city: string,
//       state: string,
//       country: string,
//       postcode: number,
//       coordinates: {
//         latitude: string,
//         longitude: string,
//       },
//       timezone: {
//         offset: string,
//         description: string,
//       },
//     },
//     email: string,
//     login: {
//       uuid: string,
//       username: string,
//       password: string,
//       salt: string,
//       md5: string,
//       sha1: string,
//       sha256: string,
//     },
//     dob: {
//       date: string,
//       age: number,
//     },
//     registered: {
//       date: string,
//       age: number,
//     },
//     phone: string,
//     cell: string,
//     id: number,
//     picture: {
//       large: string,
//       medium: string,
//       thumbnail: string,
//     },
//     nat: string,
//   }
