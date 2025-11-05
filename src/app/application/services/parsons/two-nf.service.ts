import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { ApiHttpClient } from '../../core/api-http-client.service';
import { Parsons2NFQuestion } from '../../models/parsons/parsons-2nf.model';

/**
 * Service responsible for all 2NF-related API communication.
 * Retrieves the base question, table structure, and column-level feedback.
 */

@Injectable({ providedIn: 'root' })
export class TwoNFService {
  constructor(private api: ApiHttpClient) { }

  /** Retrieves the base 2NF question metadata (without tables or feedback). */
  getQuestion(questionId: number): Observable<Parsons2NFQuestion> {
    return this.api.get<{ success: boolean; data: any }>(`/2nf/${questionId}`).pipe(
      map(r => ({
        questionId: r.data.QUESTION_ID,
        section: 2,
        title: r.data.TITLE,
        instructions: r.data.INSTRUCTIONS,
        htmlContent: r.data.HTML_CONTENT,
        summary: r.data.SUMMARY,
        twoNFTables: [], // Fetched through getTables() call
        feedback: []
      }))
    );
  }

  /** Retrieves all tables (and columns) for a specific 2NF question. */
  getTables(questionId: number): Observable<any[]> {
    return this.api.get<{ success: boolean; data: any[] }>(`/2nf/${questionId}/tables`).pipe(
      map(r => r.data)
    );
  }

  /** Retrieves all feedback entries used to validate column placement. */
  getFeedback(questionId: number): Observable<any[]> {
    return this.api.get<{ success: boolean; data: any[] }>(`/2nf/${questionId}/feedback`).pipe(
      map(r => r.data)
    );
  }

  /**
  * Helper method to fetch all data (question, tables, feedback) in parallel.
  * Returns a complete Parsons2NFQuestion object ready for mapping.
  */
  loadQuestionData(questionId: number): Observable<Parsons2NFQuestion> {
    return forkJoin([
      this.getQuestion(questionId),
      this.getTables(questionId),
      this.getFeedback(questionId)
    ]).pipe(
      map(([q, tables, feedback]) => ({
        ...q,
        twoNFTables: tables,
        feedback
      }))
    );
  }
}
