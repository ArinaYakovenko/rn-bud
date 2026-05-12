type GalleryImage = {
  src: string
  alt: string
  folder: string
  fileName: string
}

type GalleryCategory = {
  id: string
  title: string
  subtitle: string
  cover: string
  images: GalleryImage[]
}

const folderLabels: Record<string, string> = {
  'gładzie': 'Gładzie',
  ocieplenie: 'Ocieplenie',
  sufity: 'Sufity',
  tynki: 'Tynki',
}

const imageModules = import.meta.glob('../images/**/*.{JPG,JPEG,PNG,WEBP,GIF,SVG,jpg,jpeg,png,webp,gif,svg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const toFolderLabel = (folder: string) => folderLabels[folder] ?? folder.replace(/[-_]+/g, ' ')

const toFileLabel = (fileName: string) => fileName.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim()

const galleryImages = Object.entries(imageModules)
  .map(([path, src]) => {
    const parts = path.split('/')
    const folder = parts[parts.length - 2] ?? 'galeria'
    const fileName = parts[parts.length - 1] ?? ''
    const folderLabel = toFolderLabel(folder)
    const fileLabel = toFileLabel(fileName)

    return {
      src,
      folder,
      fileName,
      alt: fileLabel ? `${folderLabel} - ${fileLabel}` : folderLabel,
    }
  })
  .sort((left, right) => {
    const folderCompare = left.folder.localeCompare(right.folder, 'pl')

    if (folderCompare !== 0) {
      return folderCompare
    }

    return left.fileName.localeCompare(right.fileName, 'pl', { numeric: true })
  })

export const galleryCategories: GalleryCategory[] = [
  {
    id: 'realizacje',
    title: 'Realizacje RN-BUD',
    subtitle: 'Wszystkie zdjęcia z folderów galerii',
    cover: galleryImages[0]?.src ?? '',
    images: galleryImages,
  },
]
