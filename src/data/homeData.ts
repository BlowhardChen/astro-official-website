export interface FeatureItem {
  iconSrc: string;
  title: string;
  description: string;
  customStyle?: React.CSSProperties;
}

export interface ServiceItem {
  imageSrc: string;
  title: string;
  description: string;
  linkUrl: string;
}

export interface AdvantageItem {
  iconSrc: string;
  title: string;
  description: string;
}

export interface QualificationItem {
  imageSrc: string;
  title: string;
}

export const homeData = {
  features: [
    {
      iconSrc: "/images/home/icon-company-1.webp",
      title: "初心使命",
      description: "地约用心，种地省心",
      customStyle: {boxShadow: "0px 2px 16px 0px rgba(0,0,0,0.04)"},
    },
    {
      iconSrc: "/images/home/icon-company-2.webp",
      title: "愿景理念",
      description: "地尽其力，地利共享",
      customStyle: {boxShadow: "0px 2px 16px 0px rgba(0,0,0,0.04)"},
    },
    {
      iconSrc: "/images/home/icon-company-3.webp",
      title: "价值观",
      description: "诚信实干，为农谋利",
      customStyle: {boxShadow: "0px 2px 16px 0px rgba(0,0,0,0.04)"},
    },
    {
      iconSrc: "/images/home/icon-company-4.webp",
      title: "经营目标",
      description: "降成本，多打粮，种好地",
      customStyle: {boxShadow: "0px 2px 16px 0px rgba(0,0,0,0.04)"},
    },
  ] as FeatureItem[],

  services: [
    {
      imageSrc: "/images/home/bg-servie-1-mobile.webp",
      title: "土地托管",
      description:
        "农户在不流转土地经营权的条件下，将农业生产中的耕、种、防、收等全部或部分作业环节委托给地约县级公司或村镇加盟店完成的农业经营方式。可以充分发挥农业规模化、集约化、机械化生产和统一经营管理的优势…",
      linkUrl: "/business?landType=trusteeship",
    },
    {
      imageSrc: "/images/home/bg-servie-2-mobile.webp",
      title: "土地流转",
      description:
        "土地流转实质就是农村土地经营权的转让，土地流转是指拥有土地承包经营权的农户通过转包、出租、转让、互换、入股等方式将土地经营权（使用权）转让给地约，农户不参与土地经营，除入股流转方式外，其他流转方式…",
      linkUrl: "/business?landType=circulation",
    },
  ] as ServiceItem[],

  advantages: [
    {
      iconSrc: "/images/home/icon-advantage-1.webp",
      title: "集团供应链集采",
      description: "通过集团供应链集采，为客户提供优质低价的大牌农资",
    },
    {
      iconSrc: "/images/home/icon-advantage-2.webp",
      title: "数智化技术",
      description: "通过数字化改造农机农艺结合，能提供标准化的服务能力",
    },
    {
      iconSrc: "/images/home/icon-advantage-3.webp",
      title: "强大的服务团队",
      description: "强大的服务团队和农业产业链，为农业生产保驾护航",
    },
  ] as AdvantageItem[],

  qualifications: [
    {
      imageSrc: "/images/home/img-aptitude-1.webp",
      title: "中关村高新技术企业",
    },
    {
      imageSrc: "/images/home/img-aptitude-2.webp",
      title: "圣丰集团优秀合作商称号",
    },
    {
      imageSrc: "/images/home/img-aptitude-3-mobile.webp",
      title: "计算机软件著作权",
    },
    {
      imageSrc: "/images/home/img-aptitude-4-mobile.webp",
      title: "北京亦庄创新创业大赛",
    },
  ] as QualificationItem[],
};
