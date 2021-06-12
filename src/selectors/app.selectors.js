import { createSelector } from "reselect";

export const imagesSelector = state => state.data;
export const isLoadingSelector = state => state.isLoading;
export const viewedIdsSelector = state => state.viewedIds;
export const searchTextSelector = state => state.searchText;
export const errorSelector = state => state.error;

export const unViewedImagesSelector = createSelector(
  [imagesSelector, viewedIdsSelector],
  (images, viewedIds) => {
    return images.filter(item => !viewedIds.includes(item.id));
  },
);

export const currentImageSelector = createSelector(
  unViewedImagesSelector,
  images => {
    const [firstImage] = images;

    return firstImage ?? null;
  },
);
