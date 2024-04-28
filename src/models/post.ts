
export interface Post {
    id: number
    attributes: Attributes
}

export interface Attributes {
    title: string
    content: Content[]
    short_description: string
    slug: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    thumbnail: Thumbnail
    post_categories: PostCategories
}

export interface Content {
    type: string
    children: Children[]
}

export interface Children {
    text: string
    type: string
}

export interface Thumbnail {
    data: Daum2[]
}

export interface Daum2 {
    id: number
    attributes: Attributes2
}

export interface Attributes2 {
    name: string
    alternativeText: any
    caption: any
    width: number
    height: number
    formats: Formats
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: any
    provider: string
    provider_metadata: any
    createdAt: string
    updatedAt: string
}

export interface Formats {
    small: Small
    thumbnail: Thumbnail2
    large?: Large
    medium?: Medium
}

export interface Small {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: any
    size: number
    width: number
    height: number
    sizeInBytes: number
}

export interface Thumbnail2 {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: any
    size: number
    width: number
    height: number
    sizeInBytes: number
}

export interface Large {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: any
    size: number
    width: number
    height: number
    sizeInBytes: number
}

export interface Medium {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: any
    size: number
    width: number
    height: number
    sizeInBytes: number
}

export interface PostCategories {
    data: Daum3[]
}

export interface Daum3 {
    id: number
    attributes: Attributes3
}

export interface Attributes3 {
    category_name: string
    description: Description[]
    slug: string
    createdAt: string
    updatedAt: string
    publishedAt: string
}

export interface Description {
    type: string
    children: Children2[]
}

export interface Children2 {
    text: string
    type: string
}
