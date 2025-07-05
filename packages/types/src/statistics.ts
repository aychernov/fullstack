// Статистика — объект с кодом страны и числом просмотров
export type Stats = Record<string, number>;

// DTO для запроса увеличения счётчика
export interface IncrementCountryDto {
  countryCode: string;
}
