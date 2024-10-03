export const LANGUAGES = ["English", "Chinese"] as const;
export type Language = (typeof LANGUAGES)[number];

type LanguageToCopy = {
  [key in Language]: string;
};

export const LANGUAGE_MAP: LanguageToCopy = {
  English: "English",
  Chinese: "中文",
};

export const TITLE_MAP: LanguageToCopy = {
  English: "Notion Files Transfer Tool",
  Chinese: "Notion 文件搬家工具",
};
