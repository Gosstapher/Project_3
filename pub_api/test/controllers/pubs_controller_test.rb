require 'test_helper'

class PubsControllerTest < ActionController::TestCase
  setup do
    @pub = pubs(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    # assert_not_nil assigns(:pubs)
  end

  test "should create pub" do
    assert_difference('Pub.count') do
      post :create, pub: { details: @pub.details, location: @pub.location, name: @pub.name }
    end

    assert_response 201
  end

  test "should show pub" do
    get :show, id: @pub
    assert_response :success
  end

  test "should update pub" do
    put :update, id: @pub, pub: { details: @pub.details, location: @pub.location, name: @pub.name }
    assert_response 204
  end

  test "should destroy pub" do
    assert_difference('Pub.count', -1) do
      delete :destroy, id: @pub
    end

    assert_response 204
  end
end
