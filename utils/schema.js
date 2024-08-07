
import { pgTable,serial ,text, varchar} from "drizzle-orm/pg-core";

export const MockInterview=pgTable('mock_interview', {
    id:serial('id').primaryKey(),
    jsonMockResponse:text('json_mock_response').notNull(),
    jobPosition:varchar('job_position').notNull(),
    jobDesc:varchar('job_desc').notNull(),
    jobExperience:varchar('job_experience').notNull(),
    createdBy:varchar('created_by').notNull(),
    createdAt:varchar('created_at'),
    mockId:varchar('mock_id').notNull(),
});

export const UserAnswers = pgTable('userAnswer', {
   id:serial('id').primaryKey(),
   mockidRef:varchar('mock_id').notNull(),
   question:varchar('question').notNull(),
   correctAns:text('correctAns'),
   userAns:text('userAns'),
   feedback:text('feedback'),
   rating:varchar('rating'),
   userEmail:varchar('userEmail'),
   createdAt:varchar('createdAt')
})