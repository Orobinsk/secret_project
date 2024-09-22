import { EndpointTypeMap, IGetMoviesListParams, ISearchResult, TEndpoint } from './apiTypes';
import { apiTMDB } from './base';

export async function getMovie<E extends TEndpoint>({
  endpoint,
  params,
}: IGetMoviesListParams = {}): Promise<ISearchResult<EndpointTypeMap[E]>> {
  let currentEndpoint = `movie${endpoint ? `/${endpoint}` : ''}`;

  try {
    const response = await apiTMDB.get<ISearchResult<EndpointTypeMap[E]>>(currentEndpoint, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
