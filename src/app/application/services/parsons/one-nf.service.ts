import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiHttpClient } from '../../core/api-http-client.service';
import { Parsons1NFQuestion } from '../../models/parsons/parsons-1nf.model';

/** API Response models for feedback and correct order */
export interface OneNFFeedback {
  codeLineId: number;
  feedbackText: string;
  codeLineText?: string;
}

export interface OneNFCorrectOrder {
  codeLineId: number;
  explanation: string;
}

/**
 * Service responsible for retrieving all 1NF-related data from the backend.
 * This includes question details, feedback messages, and the correct order
 * of code lines used in the Parsons 1NF component.
 */
@Injectable({ providedIn: 'root' })
export class OneNFService {
  constructor(private api: ApiHttpClient) { }

  /**
  * Retrieves a full 1NF question including its code lines.
  * The correct order and feedback are retrieved separately.
  */
  getQuestion(questionId: number): Observable<Parsons1NFQuestion> {
    return this.api.get<{ success: boolean; data: any[] }>(`/1nf/${questionId}`).pipe(
      map(r => {
        const rows = r.data || [];
        const q = rows[0];
        return {
          questionId: q.QUESTION_ID,
          section: 1,
          question: q.QUESTION,
          instructions: q.HINTS ?? '',
          htmlContent: q.HTML_CONTENT ?? '',
          summary: q.SUMMARY ?? '',
          code: rows.map(item => ({
            id: item.CODE_LINE_ID,
            text: item.CODE_LINE_TEXT
          })),
          correctOrder: [],  // fetched separately via getCorrectOrder
          feedback: []       // fetched separately via getFeedback
        } as Parsons1NFQuestion;
      })
    );
  }

  /** Retrieves all feedback messages linked to a specific 1NF question. */
  getFeedback(questionId: number): Observable<OneNFFeedback[]> {
    return this.api.get<{ success: boolean; data: any[] }>(`/1nf/${questionId}/feedback`).pipe(
      map(r =>
        (r.data || []).map(row => ({
          codeLineId: Number(row.CODE_LINE_ID ?? row.code_line_id),
          feedbackText: String(row.FEEDBACK_TEXT ?? row.feedback_text ?? ''),
          codeLineText: row.CODE_LINE_TEXT ?? row.code_line_text ?? undefined
        }))
      )
    );
  }

  /** Retrieves the correct line order for verifying player solutions. */
  getCorrectOrder(questionId: number): Observable<OneNFCorrectOrder[]> {
    return this.api.get<{ success: boolean; data: any[] }>(`/1nf/${questionId}/correct-order`).pipe(
      map(r =>
        (r.data || []).map(row => ({
          codeLineId: Number(row.CODE_LINE_ID ?? row.code_line_id),
          explanation: String(row.EXPLANATION ?? row.explanation ?? '')
        }))
      )
    );
  }
}
