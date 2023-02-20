'use client'

import { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextField from '@/components/input/default'
import Button from '@/components/button/button'
import SelectMultiField from '@/components/input/select-multi'
import SelectField from '@/components/input/select'
import { createMovie } from '@/lib/movieService'
import { useRouter } from 'next/navigation'

export default function CreateForm({ genres, actors, directors = [] }) {
  const [errors, setErrors] = useState(null)
  const router = useRouter()

  const onSubmit = async (values) => {
    const [data, err] = await createMovie(values)

    if (err) {
      setErrors(err.errors)
    } else {
      router.push(`/movies/${data.id}`)
    }
  }

  const initialValues = {}

  const genreOptions = genres.map((genre) => {
    return { label: genre.name, value: genre.id }
  })

  const actorsOptions = actors.map((actor) => {
    return { label: `${actor.firstName} ${actor.lastName}`, value: actor.id }
  })

  const directorOptions = directors.map((director) => {
    return {
      label: `${director.firstName} ${director.lastName}`,
      value: director.id,
    }
  })

  return (
    <div className="w-full">
      <h1 className="text-5xl font-bold text-center mb-10">Create</h1>
      <div className="py-8 px-8 bg-white rounded w-full h-full">
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <div className="grid lg:grid-cols-2 gap-4 mb-4">
                <TextField
                  name="name"
                  title="Name"
                  placeholder="Name of the movie"
                  type="text"
                />

                <TextField
                  name="year"
                  title="Year"
                  placeholder="Year of the movie"
                  type="number"
                  min={1900}
                  max={2077}
                />
                <TextField
                  name="synopsis"
                  title="Synopsis"
                  placeholder="Short description of the movie"
                  type="text"
                />

                <TextField
                  name="ageLimit"
                  title="Age limit"
                  placeholder="Age limit of the movie"
                  type="number"
                  min={0}
                  max={18}
                />

                <SelectMultiField
                  options={genreOptions}
                  name="genreIds"
                  title="Genres"
                />

                <SelectMultiField
                  options={actorsOptions}
                  name="actorIds"
                  title="Actors"
                />

                <SelectField
                  options={directorOptions}
                  name="DirectorId"
                  title="Director"
                />

                <TextField
                  name="rating"
                  title="Rating"
                  placeholder="Rating of the movie"
                  type="number"
                  min={0}
                  max={5}
                />
              </div>
              {errors &&
                errors.map((error) => {
                  return (
                    <div
                      key={error}
                      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
                    >
                      {error}
                    </div>
                  )
                })}

              <Button disabled={isSubmitting} type="submit">
                Save
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
