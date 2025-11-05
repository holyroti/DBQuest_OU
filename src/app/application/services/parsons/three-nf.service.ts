import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Parsons3NFQuestion } from '../../models/parsons/parsons-3nf.model';
import { Parsons3NFMapper } from '../../features/parsons-3nf/parsons-3nf-mapper';
import { ApiHttpClient } from '../../core/api-http-client.service';

/**
 * Service responsible for retrieving 3NF-specific question data.
 * Combines question metadata, table definitions, columns, and feedback
 * into a unified model via the Parsons3NFMapper.
 */

@Injectable({ providedIn: 'root' })
export class ThreeNFService {
  constructor(private api: ApiHttpClient) {}

  /**
   * Retrieves all details for a given 3NF question by questionId.
   * The backend returns a nested response (JSON) containing:
   *   question metadata
   *   tables and their columns
   *   feedback rules for validation
   */  
  getDetails(questionId: number): Observable<Parsons3NFQuestion> {
    return this.api.get(`/3nf/${questionId}/details`).pipe(
      map((res: any) => {
        const q = res?.data?.question ?? {};
        const tables = res?.data?.tables ?? [];
        const columns = res?.data?.columns ?? [];
        const feedback = res?.data?.feedback ?? [];

        // Call the helper mapper function with (question, tables, columns, feedback)
        return Parsons3NFMapper.mapQuestion(q, tables, columns, feedback);
      })
    );
  }
}
