import { useFormik } from "formik";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import * as yup from "yup";

import { CREATE_REVIEW } from "../graphql/mutations";

import { useMutation } from "@apollo/client";

import { useNavigate } from "react-router-native";

const initialValues = {
  repositoryOwnerName: "",
  repositoryName: "",
  rating: "",
  review: "",
};

const validationSchema = yup.object().shape({
  repositoryOwnerName: yup
    .string()
    .required("Repository ownerName is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .required("Rating is required")
    .min(0, "Rating must be larger or equal to 0")
    .max(100, "Rating must be less or equal to 100"),
  review: yup.string(),
});

const ReviewForm = () => {
  const onSubmit = async (values) => {
    const { repositoryOwnerName, repositoryName, rating, review } = values;

    const newReview = {
      ownerName: repositoryOwnerName,
      rating: Number(rating),
      repositoryName,
      text: review,
    };

    await createReview({ variables: { review: newReview } });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const navigate = useNavigate();

  const [createReview] = useMutation(CREATE_REVIEW, {
    onCompleted: (result) => {
      navigate(`/${result.createReview.repositoryId}`);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <View style={styles.container}>
      <Input
        placeholder="Repository owner name"
        onChangeText={formik.handleChange("repositoryOwnerName")}
        value={formik.values.repositoryOwnerName}
        inputContainerStyle={[
          formik.errors.repositoryOwnerName && styles.errorBorder,
        ]}
        errorMessage={formik.errors.repositoryOwnerName}
      />
      <Input
        placeholder="Repository name"
        onChangeText={formik.handleChange("repositoryName")}
        value={formik.values.repositoryName}
        inputContainerStyle={[
          formik.errors.repositoryName && styles.errorBorder,
        ]}
        errorMessage={formik.errors.repositoryName}
      />
      <Input
        placeholder="Rating between 0 and 100"
        onChangeText={formik.handleChange("rating")}
        value={formik.values.rating}
        inputContainerStyle={[formik.errors.rating && styles.errorBorder]}
        errorMessage={formik.errors.rating}
      />
      <Input
        placeholder="Review"
        onChangeText={formik.handleChange("review")}
        value={formik.values.review}
        inputContainerStyle={[formik.errors.review && styles.errorBorder]}
        errorMessage={formik.errors.review}
        multiline
      />

      <Button title="Create a review" onPress={formik.handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
  },
  errorBorder: {
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 4,
  },
});

export default ReviewForm;
