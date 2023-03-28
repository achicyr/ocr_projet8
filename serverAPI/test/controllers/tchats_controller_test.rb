require "test_helper"

class TchatsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @tchat = tchats(:one)
  end

  test "should get index" do
    get tchats_url, as: :json
    assert_response :success
  end

  test "should create tchat" do
    assert_difference("Tchat.count") do
      post tchats_url, params: { tchat: { contents: @tchat.contents, requester_id: @tchat.requester_id, volontier_id: @tchat.volontier_id } }, as: :json
    end

    assert_response :created
  end

  test "should show tchat" do
    get tchat_url(@tchat), as: :json
    assert_response :success
  end

  test "should update tchat" do
    patch tchat_url(@tchat), params: { tchat: { contents: @tchat.contents, requester_id: @tchat.requester_id, volontier_id: @tchat.volontier_id } }, as: :json
    assert_response :success
  end

  test "should destroy tchat" do
    assert_difference("Tchat.count", -1) do
      delete tchat_url(@tchat), as: :json
    end

    assert_response :no_content
  end
end
